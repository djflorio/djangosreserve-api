const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AboutSchema = new Schema({
  blurb: {type: String}
});

module.exports = mongoose.model('About', AboutSchema);