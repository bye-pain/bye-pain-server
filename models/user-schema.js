/**
 * Created by crist on 04/04/2017.
 */
import mongoose from 'mongoose';

class UserSchema extends mongoose.Schema {

  constructor() {
    super({
      username: String,
      password: String
    });
  }
}

export default mongoose.model("Users", new UserSchema, "users");