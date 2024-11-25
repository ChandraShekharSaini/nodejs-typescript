import express, { Application, Response, Request,NextFunction } from 'express';

const app: Application = express();

const PORT: number = 4000;

app.get('/typescript', (req: Request, res: Response, next:NextFunction) => {
  
  res.status(201).json('You are Jaat Bro');
});

app.listen(PORT, () => {
  console.log('http://localhost:', PORT);
});
