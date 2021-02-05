const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const imgUpload = require('../middleware/imgUpload');
const path = require('../paths').imgStorage;
const { toDelete } = require('../utilities');

const Pinned = mongoose.model('pinned');

module.exports = (app) => {
  app.get('/api/pinned', async (req, res, next) => {
    const pinned = await Pinned.find().sort('index');
    res.contentType('json');
    return res.status(200).send(pinned);
  });

  app.delete('/api/pinned/:id', requireLogin, async(req, res, next) => {
    const pinned = await Pinned.findByIdAndDelete(req.params.id);

    if(!pinned) {
      return res.status(404).send('Not found');
    }

    toDelete(pinned.image, path);

    const deletePinned = await Pinned.findByIdAndDelete(req.params.id);

    return res.status(200).send(pinned);
  });

  app.put('/api/pinned', requireLogin, imgUpload.array('image'), async (req, res, next) => {  
    const pinned = {};

    pinned.index = req.body.index;
    pinned.title = req.body.title;
    pinned.text = req.body.text;

    if(req.body.toDelete){
      const image = req.body.origins.split(',');
      const deleteArray = req.body.toDelete.split(',');

      for(let i = 0; i < image.length; i++) {
        for(let j = 0; j < req.files.length; j++) {
          if(image[i] === deleteArray[j]) {
            image[i] = req.files[j].filename;
          }
        }
      }

      pinned.image = image;
    }
    
    const response = await Pinned.findByIdAndUpdate(req.body.id, pinned,
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

  app.post('/api/pinned', requireLogin, imgUpload.array('image'), async (req, res, next) => {  
    const pinned = {};

    if(req.body.index){
      pinned.index = Number.parseInt(req.body.index);
    } else {
      const lastMaxIndex = await Pinned.findOne().sort('-index');
      pinned.index = lastMaxIndex.index + 1;
    }

    pinned.title = req.body.title;
    pinned.text = req.body.text;

    const image = [];

    for(let i = 0; i < req.files.length; i++) {
        image.push(req.files[i].filename);
    }

    pinned.image = image;
    
    
    const response = await new Pinned(pinned).save();

    if(!response) {
      return res.status(404).send('not found');
    }

    return res.status(200).send(response);
  });
}