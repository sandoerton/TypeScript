import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/userService';

class UserController {
  userService = new UserService();

  public create = async (req: Request, res: Response): Promise<Response> => {
    const dataUser = req.body;
    const token = await this.userService.create(dataUser);
    return res.status(StatusCodes.CREATED).json(token);
  };
}

export default UserController;
