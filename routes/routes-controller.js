/**
 * Created by crist on 01/04/2017.
 */
"use strict";
import express from "express";
import * as variables from "./router-variables";
import {authentication} from "./../security/authentication-config";

export class RoutesController {

  constructor(app) {
    this._app = app;
    this._passport = authentication.passport;
    this._router = express.Router();
    this.init();
    this.getModels();
  }

  init() {
    authentication.initPassport();

    /* GET login page. */
    this._router.get('/', (req, res) => {
      // Display the Login page with any flash message, if any
      res.render('index', {message: req.flash('message')});
    });

    /* Handle Login POST */
    this._router.post('/login', this._passport.authenticate('login', {
      successRedirect: '/home',
      failureRedirect: '/',
      failureFlash: true
    }));

    /* GET Registration Page */
    this._router.get('/signup', (req, res) => {
      res.render('register', {message: req.flash('message')});
    });

    /* Handle Registration POST */
    this._router.post('/signup', this._passport.authenticate('signup', {
      successRedirect: '/home',
      failureRedirect: '/signup',
      failureFlash: true
    }));

    /* GET Home Page */
    this._router.get('/home', this.isAuthenticated, (req, res) => {
      res.render('home', {user: req.user});
    });

    /* Handle Logout */
    this._router.get('/signout', (req, res) => {
      req.logout();
      res.redirect('/');
    });

    this._app.use("/", this._router);
  };

  getModels() {
    const vars = Object.keys(variables);
    vars.forEach(value => {
      this._app.use(variables[value].ROUTE, variables[value].VALUE);
    });
  }

  isAuthenticated(req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated()) return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
  }
}