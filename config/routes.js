/**
 * Created by crist on 06/05/2017.
 */
const express = require('express');
const usersService = require('../api/services/users-service');
const allergiesService = require("./../api/services/allergies-service");
const companyService = require("./../api/services/company-service");

module.exports = app => {

  // API Routes
  const router = express.Router();
  app.use('/api', router);

  // rotas da API
  usersService.register(router, '/users');
  allergiesService.register(router, '/allergies');
  companyService.register(router, '/company');
};