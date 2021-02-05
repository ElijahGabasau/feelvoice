const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const imgUpload = require('../middleware/imgUpload');
const path = require('../paths').imgStorage;
const { toDelete } = require('../utilities');

const Teacher = mongoose.model('teachers');

module.exports = (app) => {
  app.get('/api/teachers', async (req, res, next) => {
    const teachers = await Teacher.find().sort('index');
    res.contentType('json');
    return res.status(200).send(teachers);
  });

  app.delete('/api/teacher/:id', requireLogin, async(req, res, next) => {
    const teacher = await Teacher.findById(req.params.id);

    if(!teacher) {
      return res.status(404).send('Not found');
    }

    toDelete(teacher.image, path);
    toDelete(teacher.imageHover, path);

    const deleteTeacher = await Teacher.findByIdAndDelete(req.params.id);

    return res.status(200).send(teacher);
  });

  app.put('/api/teacher', requireLogin, imgUpload.fields([{name: 'image', maxCount: 1}, {name: 'imageHover', maxCount: 1}]), async (req, res, next) => {  
    const teacher = {};

    teacher.index = Number.parseInt(req.body.index);
    teacher.name = req.body.name;
    teacher.title = req.body.title;
    teacher.text = [];

    for (const name in req.body) {
      if(name.includes('text-')){
        teacher.text.push(req.body[name]);
      }
    }

    for (const name in req.files) {
      teacher[name] = req.files[name][0].filename;
    }
    
    const response = await Teacher.findByIdAndUpdate(req.body.id, teacher,
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

  app.post('/api/teacher', requireLogin, imgUpload.fields([{name: 'image', maxCount: 1}, {name: 'imageHover', maxCount: 1}]), async (req, res, next) => {  
    const teacher = {};

    if(req.body.index){
      teacher.index = Number.parseInt(req.body.index);
    } else {
      const lastMaxIndex = await Teacher.findOne().sort('-index');
      teacher.index = lastMaxIndex.index + 1;
    }

    teacher.name = req.body.name;
    teacher.title = req.body.title;
    teacher.text = [];

    for (const name in req.body) {
      if(name.includes('text-')){
        teacher.text.push(req.body[name]);
      }
    }

    for (const name in req.files) {
      teacher[name] = req.files[name][0].filename;
    }
    
    const response = await new Teacher(teacher).save();

    if(!response) {
      return res.status(404).send('not found');
    }

    return res.status(200).send(response);
  });
}