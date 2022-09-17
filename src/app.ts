import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => (
  res.status(StatusCodes.OK).send('Aplicação Rodando!')
));

export default app;
