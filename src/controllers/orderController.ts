import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/orderService';

class OrderController {
  orderService = new OrderService();

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const orders = await this.orderService.getAll();
    return res.status(StatusCodes.OK).json(orders);
  };
}

export default OrderController;
