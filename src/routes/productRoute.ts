import { Router } from 'express';
import ProductController from '../controllers/productController';

const prodRoute = Router();
const prodController = new ProductController();

prodRoute.post('/', prodController.create);

export default prodRoute;
