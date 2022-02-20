import * as express from "express";
import service from '../services/product.service';

const router = express.Router();


router.get('/products', service.getProducts)

router.get('/products/:id', service.getProduct)


export default router;
