import express from 'express';
import controllers from '../controllers';

const router = express.Router();

const {products: productsController} = controllers;

router.get('/', productsController.getProducts);

export default router;
