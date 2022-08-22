import console from 'console';
import {Request, Response} from 'express';
import {ProductType} from '../../types/Product';
import items from '../../db/items.json';

const getProductById = (req: Request, res: Response) => {
  const {id} = req.params;

  try {
    const products = items as ProductType[];

    const currentProduct = products.find((product) => product.id === Number(id));

    if (!currentProduct) {
      res.status(404).json({success: false, msg: `No product with id ${id}`});
      return;
    }

    res.status(200).json({success: true, data: currentProduct});
  } catch (error) {
    console.debug(error);
    res.status(404).json({success: false, msg: error});
  }
};

export default getProductById;
