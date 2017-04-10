"use strict";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import session from "express-session";
import flash from "connect-flash";
import cookieParser from "cookie-parser";
import passport from "passport";
import {RoutesController} from "./routes/routes-controller";

/**
 * The server.
 *
 * @class Server
 */
class Server {
  constructor() {
    this.app = express();
    this.config();
  }

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {Server} Returns the newly created injector for this app.
   */
  static bootstrap() {
    return new Server();
  }

  config() {
    this.app.set("view engine", "jade"); // set up jade for templating
    this.app.set("views", path.join(__dirname, "views"));
    this.app.use(express.static('public'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(cookieParser()); // read cookies (needed for auth)

    // required for passport
    this.app.use(session({
      secret: 'mysecret',
      resave: true,
      saveUninitialized: true
    })); // session secret

    this.app.use(passport.initialize());
    this.app.use(passport.session());

    this.app.use(flash()); // use connect-flash for flash messages stored in session

    new RoutesController(this.app); // Configure routes

    // middleware to use for all requests
    this.app.use(function (err, req, res, next) {
      const error = new Error("Not Found");
      err.status = 404;
      next(err); // go to the next routes and don't stop here
    });
  }

}
const server = Server.bootstrap();
export default server.app;
