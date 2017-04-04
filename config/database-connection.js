/**
 * Created by crist on 01/04/2017.
 */
import mysql from "mysql";
import * as databaseVariables from "./database-variables";

export class DatabaseConnection {

  static createConnection() {
    this._connection = mysql.createConnection({
      host: databaseVariables.HOST,
      user: databaseVariables.USER,
      password: databaseVariables.PASSWORD,
      database: databaseVariables.DATABASE
    });
    return this._connection;
  }

  static closeConnection(options, callback) {
    return this._connection.end(options, callback);
  }
}