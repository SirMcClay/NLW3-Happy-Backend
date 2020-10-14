import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.post('/', (request, response) => {
  return response.json({ message: 'hello world' });
})

app.listen(3333);