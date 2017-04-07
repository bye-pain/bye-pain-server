"use strict";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import {routesController} from "./routes/routes-controller";

/**
 * The server.
 *
 * @class Server
 */
class Server {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
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
    this.app.set("view engine", "jade");
    this.app.set("views", path.join(__dirname, "views"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));

    // middleware to use for all requests
    this.app.use(function (err, req, res, next) {
      const error = new Error("Not Found");
      err.status = 404;
      err.message(error.message);
      next(err); // go to the next routes and don't stop here
    });
  }

  /**
   * Configure routes
   *
   * @class Server
   * @method routes
   * @return void
   */
  routes() {
    //get router
    let router = express.Router();

    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.app.use('/', router);
    routesController.getRoutes(this.app);
  }
}
const server = Server.bootstrap();
export default server.app;
