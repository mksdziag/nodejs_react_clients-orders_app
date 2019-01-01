const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  surname: {
    type: String,
    minlength: 3,
    required: true,
  },
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
