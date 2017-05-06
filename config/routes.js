/**
 * Created by crist on 06/05/2017.
 */
const express = require('express');

module.exports = app => {

  // API Routes
  const router = express.Router();
  app.use('/api', router);

  // rotas da API
  const usersService = require('../api/services/users-service');
  usersService.register(router, '/users');
};