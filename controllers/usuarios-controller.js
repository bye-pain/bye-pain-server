/**
 * Created by crist on 01/04/2017.
 */
import {Router} from 'express';
import UserSchema from "./../models/user-schema";
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
    DatabaseConnection.connection.then((err) => {
      if (!err) {
        let user = UserSchema({name: "teste", password: "teste"});
        usersDAO.getAll(user, (err, res) => {
          if (err) {
            console.log(err);
          }
          else {
            console.log(res);
          }
        });
      }
    });
  }
}

// Create the UserRoute, and export its configured Express.Router
export const usersController = new UsersController();