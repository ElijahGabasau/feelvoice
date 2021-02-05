const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema({
  index: Number,
  title: String,
  text: String,
  image : Array,
});

mongoose.model('news', newsSchema);