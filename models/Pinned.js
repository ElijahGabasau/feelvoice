const mongoose = require('mongoose');
const { Schema } = mongoose;

const pinnedSchema = new Schema({
  index: Number,
  title: String,
  text: String,
  image : Array,
});

mongoose.model('pinned', pinnedSchema);