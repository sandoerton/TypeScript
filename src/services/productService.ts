import IProduct from '../interfaces/productInterface';
import connection from '../models/connection';
import ProductModel from '../models/productModel';

class ProductService {
  prodModel = new ProductModel(connection);

  public create = async (dataProduct: IProduct): Promise<IProduct> => {
    const { insertId } = await this.prodModel.create(dataProduct);
    console.log(insertId);
    
    const newProduct = { id: insertId, ...dataProduct };

    return newProduct;
  };
}

export default ProductService;
