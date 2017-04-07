/**
 * Created by crist on 01/04/2017.
 */
import {DatabaseConnection} from "../config/database-connection";
import Users from "./../models/user-schema";

export class UsersDAO {

  /**
   * Create a User
   */
  save(User, callback) {
    const db = DatabaseConnection.open();
    const schema = Users({username: User.username, password: User.password});
    schema.save(callback);
    DatabaseConnection.close(db);
  }

  /**
   *
   * GET all User.
   */
  getAll(callback) {
    const db = DatabaseConnection.open();
    Users.find(callback);
    DatabaseConnection.close(db);
  }
}

export const usersDAO = new UsersDAO();