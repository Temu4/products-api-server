import items from '../../db/items.json';
import {Request, Response} from 'express';

const getProducts = (req: Request, res: Response) => {
  res.status(200).json(items);
};

export default getProducts;
