/**
 * Created by crist on 06/05/2017.
 */
const crypto = require('crypto');
const {algorithm, vi} = require('./crypto-algorithm');

function encrypt(text) {
  const cipher = crypto.createCipher(algorithm, vi);
  let crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text) {
  const decipher = crypto.createDecipher(algorithm, vi);
  let dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

module.exports = {encrypt, decrypt};