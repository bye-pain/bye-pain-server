/**
 * Created by crist on 01/04/2017.
 */
import mongoose from "mongoose";
import * as databaseVariables from "./database-variables";

export class DatabaseConnection {

  static open() {
    return mongoose.connect(databaseVariables.MONGO_URL);
  }

  static close(db) {
    if (db) db.disconnect();
  }
}