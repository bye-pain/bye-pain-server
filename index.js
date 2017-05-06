/**
 * Created by crist on 06/05/2017.
 */
const app = require('./app');
require('./bin/www');
require('./config/database-connection');
require('./config/routes')(app);