import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import prodRoute from './routes/productRoute';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => (
  res.status(StatusCodes.OK).send('Aplicação Rodando!')
));

app.use('/products', prodRoute);

export default app;
