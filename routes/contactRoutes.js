const nodemailer = require('nodemailer');
const keys = require('../config/keys');

const transporter = nodemailer.createTransport({
  service: keys.emailService,
  auth: {
    user: keys.email,
    pass: keys.emailPassword
  }
});

module.exports = (app) => {
  app.post('/api/contact', async (req, res, next) => {
    const mailOptions = {
      from: keys.email,
      to: keys.email,
      subject: 'Посетитель сайта хочет с вами связаться',
      text: 
      `
        Имя: ${req.body.name}
        Email: ${req.body.email}
        Телефон: ${req.body.tel}


        ${req.body.text}
      `
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(200).send('Email sent: ' + info.response);
      }
    }); 
  });
}