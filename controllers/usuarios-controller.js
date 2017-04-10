/**
 * Created by crist on 01/04/2017.
 */
import {Router} from 'express';
import {usersDAO} from "../dao/users-dao";
import Users from "./../models/users-model";

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
    this._router.post('/', this.save);
  }

  /**
   *
   * @returns {router}
   */
  get router() {
    return this._router;
  }

  /**
   * Create a User
   */
  save(req, res) {
    const user = Users({username: req.body.username, password: req.body.password});
    return usersDAO.save(user, (err, Users) => {
      if (err) res.status(504);
      else if (Users) res.json(Users);
    });
  }

  /**
   *
   * GET all Users.
   */
  getAll(req, res) {
    return usersDAO.getAll(Users, (err, Users) => {
      if (err) res.status(504);
      else if (Users) res.json(Users);
    });

  }
}

// Create the UserRoute, and export its configured Express.Router
export const usersController = new UsersController();