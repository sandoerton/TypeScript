import IOrder from '../interfaces/orderInterface';
import connection from '../models/connection';
import OrderModel from '../models/orderModel';

class OrderService {
  orderModel = new OrderModel(connection);

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.orderModel.getAll();
    return orders as IOrder[];
  }
}

export default OrderService;
