/**
 * Created by crist on 01/04/2017.
 */
const MONGO_USER = "admin";
const MONGO_PASS = "connect";
const MONGO_SERVER = "localhost";
const SERVER_PORT = 27017;
export const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_SERVER}:${SERVER_PORT}`;
