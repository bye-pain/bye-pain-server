/**
 * Created by crist on 06/05/2017.
 */
const restful = require('node-restful');
const Allergies = require('./allergies');
const mongoose = restful.mongoose;

const users = new mongoose.Schema({
  email: {type: String, required: true},
  name: {type: String, required: true},
  born_date: {type: String, required: true},
  cpf: {type: String, required: true},
  weight: {type: Number, required: true},
  height: {type: Number, required: true},
  password: {type: String, required: true},
  allergies: [
    {type: mongoose.Schema.Types.ObjectId, ref: Allergies}
  ]
});

module.exports = restful.model('Users', users);