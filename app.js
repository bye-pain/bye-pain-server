"use strict";
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const allowCors = require('./config/cors');
const queryParser = require('express-query-int');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(allowCors);
app.use(queryParser());

module.exports = app;