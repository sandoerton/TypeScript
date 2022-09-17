import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/productInterface';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const [result] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return result as IProduct[];
  }

  public async create(product: IProduct): Promise<ResultSetHeader> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [product.name, product.amount],
    );

    return result;
  }
}

export default ProductModel;
