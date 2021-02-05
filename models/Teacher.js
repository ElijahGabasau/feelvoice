const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherSchema = new Schema({
  index: Number,
  name: String,
  title: String,
  text : Array,
  image: String,
  imageHover: String,
});

mongoose.model('teachers', teacherSchema);