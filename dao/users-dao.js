/**
 * Created by crist on 01/04/2017.
 */
import {DatabaseConnection} from "../config/database-connection";

export class UsersDAO {

  /**
   * Create a User
   */
  save(Users, callback) {
    const db = DatabaseConnection.open();
    Users.save(callback);
    DatabaseConnection.close(db);
  }

  /**
   *
   * GET all User.
   */
  getAll(Users, callback) {
    const db = DatabaseConnection.open();
    Users.find(callback);
    DatabaseConnection.close(db);
  }
}

export const usersDAO = new UsersDAO();