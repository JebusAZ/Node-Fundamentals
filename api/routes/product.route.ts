import { Router, Request, Response, NextFunction } from 'express';
import {testing, getProducstByID, newProduct} from '../controllers/product.controller';


const router = Router();

router.get('/testing', testing);

router.get('/getProducstByID/:id', getProducstByID);
router.post('/newProduct', newProduct);
    
    

export default router;