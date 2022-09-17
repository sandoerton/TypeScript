import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/productService';

class ProductController {
  prodservice = new ProductService();

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.prodservice.getAll();
    return res.status(StatusCodes.OK).json(products);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const dataProduct = req.body;
    const newProduct = await this.prodservice.create(dataProduct);
    return res.status(StatusCodes.CREATED).json(newProduct);
  };
}
export default ProductController;
