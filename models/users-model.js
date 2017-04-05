/**
 * Created by crist on 04/04/2017.
 */
class UsersModel {

  constructor() {
    this._username = "";
    this._password = "";
  }

  get username() : String {
    return this._username;
  }

  get password() : String {
    return this._password;
  }
}

export const users = new Users();