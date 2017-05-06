/**
 * Created by crist on 01/04/2017.
 */
const MONGO_USER = "root";
const MONGO_PASS = "connect";
const MONGO_SERVER = "ds143030.mlab.com";
const SERVER_PORT = "43030";
const DATABASE = "byepain";
module.exports = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_SERVER}:${SERVER_PORT}/${DATABASE}`;
