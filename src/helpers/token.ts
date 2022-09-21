import { sign } from 'jsonwebtoken';

// const JWT_OPTIONS = { algorithm: 'HS256', expiresIn: '1d' };

const tokenGenerate = (payload: string) => {
  const token = sign(payload, 'pass');
  return { token };
};

// const tokenCheck = (token) => {
//   const payload = verify(token, pass);
//   return payload;
// };

export default tokenGenerate;
