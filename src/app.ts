import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import orderRoute from './routes/orderRoute';
import prodRoute from './routes/productRoute';
import userRoute from './routes/userRoute';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => (
  res.status(StatusCodes.OK).send('Aplicação Rodando!')
));

app.use('/products', prodRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);

export default app;
