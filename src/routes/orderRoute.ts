import { Router } from 'express';
import OrderController from '../controllers/orderController';

const orderRoute = Router();
const orderController = new OrderController();

orderRoute.get('/', orderController.getAll);

export default orderRoute;
