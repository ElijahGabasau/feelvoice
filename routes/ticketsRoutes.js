const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const Ticket = mongoose.model('tickets');

module.exports = (app) => {
  app.get('/api/tickets', async (req, res, next) => {
    const tickets = await Ticket.find().sort('index');
    res.contentType('json');
    return res.status(200).send(tickets);
  });

  app.delete('/api/ticket/:id', requireLogin, async(req, res, next) => {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);

    if(!ticket) {
      return res.status(404).send('Not found');
    }

    return res.status(200).send(ticket);
  });

  app.put('/api/ticket', requireLogin, async (req, res, next) => {    
    const ticket = await Ticket.findByIdAndUpdate(req.body.id, { 
        title: req.body.title,
        amount: req.body.amount,
        type: req.body.type,
        price: req.body.price,
        about: req.body.about,
     },
     {
       new: true,
     });

     if(!ticket) {
       return res.status(404).send('not found');
     }

     return res.status(200).send(ticket);
  });

  app.post('/api/ticket', requireLogin, async (req, res, next) => {    
    const ticket =  { 
      title: req.body.title,
      amount: req.body.amount,
      type: req.body.type,
      price: req.body.price,
      about: req.body.about,
    };

    if(req.body.index){
      ticket.index = Number.parseInt(req.body.index);
    } else {
      const lastMaxIndex = await News.findOne().sort('-index');
      ticket.index = lastMaxIndex.index + 1;
    }

    const response = await new Ticket(ticket).save();

     if(!response) {
       return res.status(404).send('not found');
     }

     return res.status(200).send(response);
  });
}