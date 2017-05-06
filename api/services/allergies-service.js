/**
 * Created by crist on 06/05/2017.
 */
/**
 * Created by crist on 06/05/2017.
 */
const _ = require('lodash');
const Allergies = require('./../models/allergies');

Allergies.methods(['get', 'post', 'put', 'delete']);
Allergies.updateOptions({new: true, runValidators: true});

Allergies.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext);

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

module.exports = Allergies;