import tokenGenerate from '../helpers/token';
import IUser from '../interfaces/userInterface';
import connection from '../models/connection';
import UserModel from '../models/userModel';

class UserService {
  userModel = new UserModel(connection);

  public async create(dataUser: IUser): Promise<object> {
    const newUser = await this.userModel.create(dataUser);
    const token = tokenGenerate(newUser.username);
    return token;
  }
}

export default UserService;
