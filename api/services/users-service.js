/**
 * Created by crist on 06/05/2017.
 */
const _ = require('lodash');
const Users = require('./../models/users');
const {encrypt} = require("./../../security/cryptography");

Users.methods(['get', 'post', 'put', 'delete']);
Users.updateOptions({new: true, runValidators: true});

Users.before('post', cryptUserPassword).before('put', cryptUserPassword);

function cryptUserPassword(req, res, next) {
  if (req.body.password) req.body.password = encrypt(req.body.password);

  next();
}

Users.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext);

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle;

  if (bundle.errors) {
    let errors = parseErrors(bundle.errors);
    res.status(500).json({errors});
  } else {
    next();
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = [];
  _.forIn(nodeRestfulErrors, error => errors.push(error.message));
  return errors;
}

module.exports = Users;