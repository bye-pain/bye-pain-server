/**
 * Created by crist on 01/04/2017.
 */
const MONGO_URL = require("./database-variables");
const mongoose = require('mongoose');

module.exports = mongoose.connect(MONGO_URL);