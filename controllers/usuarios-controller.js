/**
 * Created by crist on 01/04/2017.
 */
import {Router} from 'express';
import {usersDAO} from "../dao/users-dao";

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
    return usersDAO.getAll((err, Users) => {
      if(err) res.status(504);
      else if(Users) res.json(Users);
    });

  }
}

// Create the UserRoute, and export its configured Express.Router
export const usersController = new UsersController();