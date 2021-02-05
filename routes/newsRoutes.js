const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const imgUpload = require('../middleware/imgUpload');
const path = require('../paths').imgStorage;
const { toDelete } = require('../utilities');

const News = mongoose.model('news');

module.exports = (app) => {
  app.get('/api/news', async (req, res, next) => {
    const news = await News.find().sort('index');
    
    res.contentType('json');
    return res.status(200).send(news);
  });

  app.delete('/api/news/:id', requireLogin, async(req, res, next) => {
    const news = await News.findByIdAndDelete(req.params.id);

    if(!news) {
      return res.status(404).send('Not found');
    }

    toDelete(news.image, path);

    const deleteNews = await News.findByIdAndDelete(req.params.id);

    return res.status(200).send(news);
  });

  app.put('/api/news', requireLogin, imgUpload.array('image'), async (req, res, next) => {  
    const news = {};

    news.index = req.body.index;
    news.title = req.body.title;
    news.text = req.body.text;

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

      news.image = image;
    }
    
    const response = await News.findByIdAndUpdate(req.body.id, news,
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

  app.post('/api/news', requireLogin, imgUpload.array('image'), async (req, res, next) => {  
    const news = {};

    if(req.body.index){
      news.index = Number.parseInt(req.body.index);
    } else {
      const lastMaxIndex = await News.findOne().sort('-index');
      news.index = lastMaxIndex.index + 1;
    }

    news.title = req.body.title;
    news.text = req.body.text;

    const image = [];

    for(let i = 0; i < req.files.length; i++) {
        image.push(req.files[i].filename);
    }

    news.image = image;
    
    const response = await new News(news).save();

    if(!response) {
      return res.status(404).send('not found');
    }

    return res.status(200).send(response);
  });
}