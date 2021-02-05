const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema({
  index: Number,
  title: String,
  amount: String,
  type: String,
  price: String,
  about: String,
});

mongoose.model('tickets', ticketSchema);