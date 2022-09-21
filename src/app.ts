import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import prodRoute from './routes/productRoute';
import userRoute from './routes/userRoute';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => (
  res.status(StatusCodes.OK).send('Aplicação Rodando!')
));

app.use('/products', prodRoute);
app.use('/users', userRoute);

export default app;
