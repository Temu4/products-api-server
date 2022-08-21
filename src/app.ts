import express from 'express';
import morgan from 'morgan';

import {productsRouter} from './routes';

const app = express();

app.use(
  morgan(':date[iso] :method :url :status :response-time ms', {
    immediate: false
  })
);

app.use('/api/products', productsRouter);

app.get('/', (req, res) => {
  res.status(200).send('<h1>Products API</h1>');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
