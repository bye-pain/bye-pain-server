/**
 * Created by crist on 01/04/2017.
 */
export class UsersDAO {

  /**
   *
   * GET all User.
   */
  getAll(user, callback) {
    user.save(callback);
  }
}

export const usersDAO = new UsersDAO();