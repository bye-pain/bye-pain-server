/**
 * Created by crist on 06/05/2017.
 */
const restful = require('node-restful');
const mongoose = restful.mongoose;

const allergies = new mongoose.Schema({
  name: {type: String, required: true}
});

module.exports = restful.model('Allergies', allergies);