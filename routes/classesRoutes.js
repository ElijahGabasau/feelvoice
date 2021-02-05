const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const imgUpload = require('../middleware/imgUpload');
const path = require('../paths').imgStorage;
const { toDelete } = require('../utilities');

const Class = mongoose.model('classes');

module.exports = (app) => {
  app.get('/api/classes', async (req, res, next) => {
    const classes = await Class.find().sort('index');
    res.contentType('json');
    return res.status(200).send(classes);
  });

  app.delete('/api/class/:id', requireLogin, async(req, res, next) => {
    const subject = await Class.findByIdAndDelete(req.params.id);

    if(!subject) {
      return res.status(404).send('Not found');
    }

    toDelete(subject.image, path);
    toDelete(subject.thumbnail, path);
    toDelete(subject.thumbnailHover, path);

    const deleteSubject = await Class.findByIdAndDelete(req.params.id);

    return res.status(200).send(subject);
  });

  app.put('/api/class', 
  requireLogin,
  imgUpload.fields([{name: 'image', maxCount: 1}, {name: 'thumbnail', maxCount: 1}, {name: 'thumbnailHover', maxCount: 1}]), 
  async (req, res, next) => { 
    const subject = {};

    subject.index = req.body.index;
    subject.type = req.body.type;
    subject.name = req.body.name;
    subject.title = req.body.title;
    subject.text = [];

    for (const name in req.body) {
      if(name.includes('text-')){
        subject.text.push(req.body[name]);
      }
    }

    for (const name in req.files) {
      subject[name] = req.files[name][0].filename;
    }
    
    const response = await Class.findByIdAndUpdate(req.body.id, subject,
     {
       new: true,
     }
    );

    if(!response) {
      return res.status(404).send('not found');
    }

    if(req.body.toDelete) {
      toDelete(req.body.toDelete, path);
    }

    return res.status(200).send(response);
  });

  app.post('/api/class', 
  requireLogin,
  imgUpload.fields([{name: 'image', maxCount: 1}, {name: 'thumbnail', maxCount: 1}, {name: 'thumbnailHover', maxCount: 1}]), 
  async (req, res, next) => { 
    const subject = {};

    if(req.body.index){
      subject.index = Number.parseInt(req.body.index);
    } else {
      const lastMaxIndex = await Class.findOne().sort('-index');
      subject.index = lastMaxIndex.index + 1;
    }

    subject.type = req.body.type;
    subject.name = req.body.name;
    subject.title = req.body.title;
    subject.text = [];

    for (const name in req.body) {
      if(name.includes('text-')){
        subject.text.push(req.body[name]);
      }
    }

    for (const name in req.files) {
      subject[name] = req.files[name][0].filename;
    }
    
    const response = await new Class(subject).save();

    if(!response) {
      return res.status(404).send('not found');
    }

    return res.status(200).send(response);
  });
}

