/**
 * Created by crist on 01/04/2017.
 */
import mongoose from "mongoose";
import * as databaseVariables from "./database-variables";

export class DatabaseConnection {

  static get connection() {
    console.log(databaseVariables.MONGO_URL);
    return mongoose.connect(databaseVariables.MONGO_URL);
  }
}