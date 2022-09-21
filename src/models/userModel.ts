import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/userInterface';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<IUser> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [user.username, user.classe, user.level, user.password],
    );
    const newUser = { id: result.insertId, ...user };

    return newUser as IUser;
  }
}

export default UserModel;
