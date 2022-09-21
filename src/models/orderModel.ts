import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/orderInterface';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const QUERY = `SELECT Orders.id, Orders.userId,
    JSON_ARRAYAGG(Products.id) AS productsIds
    FROM Trybesmith.Orders INNER JOIN Trybesmith.Products 
    ON Orders.id = Products.orderId
    WHERE Orders.id = Products.orderId
    GROUP BY Orders.id
    ORDER BY Orders.userId;`;
    const [result] = await this.connection.execute(QUERY);
    return result as IOrder[];
  }
}

export default OrderModel;
