const mongoose = require('mongoose');
const { Schema } = mongoose;

const classSchema = new Schema({
  index: Number,
  type: String,
  title: String,
  text : Array,
  image: String,
  thumbnail: String,
  thumbnailHover: String,
});

mongoose.model('classes', classSchema);