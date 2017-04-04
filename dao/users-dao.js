/**
 * Created by crist on 01/04/2017.
 */
export class UsersDAO {

  init(connection) {
    this._connection = connection;
  }
  /**
   *
   * GET all User.
   */
  getAll(callback) {
    this._connection.query("select * from produtos", callback);
  }
}

export const usersDAO = new UsersDAO();