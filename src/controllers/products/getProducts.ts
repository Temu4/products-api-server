import {Request, Response} from 'express';
import items from '../../db/items.json';

const getProducts = (req: Request, res: Response) => {
  res.status(200).json({success: true, data: items});
};

export default getProducts;
