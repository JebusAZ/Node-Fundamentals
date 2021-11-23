import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productCtrl = ProductController();
const router = Router();

router.get('/testing', productCtrl.testing);
router.get('/getProductByID/:id', productCtrl.getProductByID);
router.post('/newProduct', productCtrl.newProduct);
    
    

export default router;