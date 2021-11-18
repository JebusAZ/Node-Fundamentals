import express from 'express';
import ProductRoute from './routes/product.route';
import cors from 'cors';

import MongoHelper from './helpers/mongo.helpers';
import ENV from './environments/env.dev';

const app = express();


(async () => {
    app.listen(3000, async () => {

        console.log('Mostramos entorno de ejecución', process.env.NODE_ENV);
        
        app.use(express.json());
        app.use(express.urlencoded({extended:true}));

        const mongodb: any = MongoHelper.getInstance(ENV);
        await mongodb.connect();

        app.use(cors);
        app.use('/v1/products', ProductRoute);
        app.listen(5000, ()=>{
            console.log("It' Works!");
        })
    });

})();
