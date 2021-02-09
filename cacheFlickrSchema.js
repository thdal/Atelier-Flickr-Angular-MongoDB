var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var flickrSchema = new Schema({
  name: { type: String },
  imgs: { type: Array },
}, { versionKey: false});

module.exports = mongoose.model('flickrCache', flickrSchema)
