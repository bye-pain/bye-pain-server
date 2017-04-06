/**
 * Created by crist on 04/04/2017.
 */
import mongoose from 'mongoose';
class UsersModel extends mongoose.Model{

  get username() : String {
    return this._username;
  }

  get password() : String {
    return this._password;
  }
}

export const users = new UsersModel();