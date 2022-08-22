import console from 'console';
import {Request, Response} from 'express';
import {ProductType} from '../../types/Product';
import items from '../../db/items.json';

const searchProducts = (req: Request, res: Response) => {
  const {name, category, color, minPrice, maxPrice, os, inStock} = req.query as {
    name: string;
    category: string;
    color: string;
    minPrice: string;
    maxPrice: string;
    os: string;
    inStock: string;
  };

  try {
    const products = items as ProductType[];

    const filteredProduct = products.filter((product) => {
      if (name && !product.name.toLowerCase().includes(name.toLowerCase())) {
        return false;
      }

      if (category && product.category.toLowerCase() !== category.toLowerCase()) {
        return false;
      }

      if (
        color &&
        !product.color.find((productColor) => {
          const colorsArray = color.toLowerCase().split(',');

          return colorsArray.includes(productColor.toLowerCase());
        })
      ) {
        return false;
      }

      if (minPrice && product.price < Number(minPrice)) {
        return false;
      }

      if (maxPrice && product.price > Number(maxPrice)) {
        return false;
      }

      if (os && product.os.toLowerCase() !== os.toLowerCase()) {
        return false;
      }

      if (inStock) {
        if (inStock === 'true' && product.orderInfo.inStock === 0) {
          return false;
        }

        if (inStock === 'false' && product.orderInfo.inStock !== 0) {
          return false;
        }
      }
      return true;
    });

    if (!filteredProduct.length) {
      res.status(404).json({success: false, msg: `No product on your search`});
      return;
    }

    res.status(200).json({success: true, data: filteredProduct});
  } catch (error) {
    console.debug(error);
    res.status(404).json({success: false, msg: error});
  }
};

export default searchProducts;
