/**
 * Created by crist on 06/05/2017.
 */
const restful = require('node-restful');
const mongoose = restful.mongoose;

const shift = new mongoose.Schema({
  fromHour: {type: Number, required: true},
  fromMinute: {type: Number, required: true},
  toHour: {type: Number, required: true},
  toMinute: {type: Number, required: true},
  dayOfWeek: {
    type: String, required: true,
    enum: ['SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA']
  }
});

const company = new mongoose.Schema({
  email: {type: String, required: true},
  fantasy_name: {type: String, required: true},
  cnpj: {type: String, required: true},
  contact: {type: String, required: true},
  password: {type: String, required: true},
  sift: [shift]
});

module.exports = restful.model('Company', company);