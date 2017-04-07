/**
 * Created by crist on 01/04/2017.
 */
import {Router} from 'express';
import sha1 from "crypto/sha1";
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
    const user = {
      username: req.body.username,
      password: sha1.b64_sha1(req.body.password)
    };
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
    return usersDAO.getAll((err, Users) => {
      if (err) res.status(504);
      else if (Users) res.json(Users);
    });

  }
}

// Create the UserRoute, and export its configured Express.Router
export const usersController = new UsersController();