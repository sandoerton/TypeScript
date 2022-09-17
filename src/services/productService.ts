import IProduct from '../interfaces/productInterface';
import connection from '../models/connection';
import ProductModel from '../models/productModel';

class ProductService {
  prodModel = new ProductModel(connection);

  public async getAll(): Promise<IProduct[]> {
    const products = await this.prodModel.getAll();
    return products as IProduct[];
  }

  public async create(dataProduct: IProduct): Promise<IProduct> {
    const { insertId } = await this.prodModel.create(dataProduct);
    const newProduct = { id: insertId, ...dataProduct };

    return newProduct;
  }
}

export default ProductService;
