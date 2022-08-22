import express from 'express';
import controllers from '../controllers';

const router = express.Router();

const {products: productsController} = controllers;

router.get('/', productsController.getProducts);
router.get('/search?', productsController.searchProducts);
router.get('/:id', productsController.getProductById);

export default router;
