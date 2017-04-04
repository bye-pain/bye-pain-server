/**
 * Created by crist on 01/04/2017.
 */
import {Router} from 'express';
import {usersDAO} from "../dao/users-dao";
import {DatabaseConnection} from "../config/database-connection";

export class UsersController {

  constructor() {
    this._router = Router();
    this.init();
  }

  /**
   * Take each handler, and attach to one of the Router's
   * endpoints.
   */
  init() {
    this._router.get('/', this.getAll);
  }

  /**
   *
   * @returns {router}
   */
  get router() {
    return this._router;
  }

  /**
   *
   * GET all Users.
   */
  getAll(req, res) {
    usersDAO.init(DatabaseConnection.createConnection());
    usersDAO.getAll((err, results) => {
      res.send(results);
      DatabaseConnection.closeConnection();
    });
  }
}

// Create the UserRoute, and export its configured Express.Router
export const usersController = new UsersController();