/**
 * Created by crist on 04/04/2017.
 */
import mongoose from 'mongoose';
import bcrypt from "bcrypt-nodejs";

class User extends mongoose.Schema {

  constructor() {
    super({
      local: {
        username: String,
        password: String
      }
    });
  }

  // generating a hash
  generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
  }

  // checking if password is valid
  validPassword(password) {
    return bcrypt.compareSync(password, this.local.password);
  };
}

export default mongoose.model("Users", new User, "users");