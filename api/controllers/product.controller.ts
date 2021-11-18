import { Request, Response } from "express";

export const testing = async(req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
        msj: 'Route Product Works'
    });
};

let mockProduct: any =[
    {
        productId: '1261',
        productCode: 'SM-9897-J',
        productName: 'Disco Duro',
        productCategory: 'Storage',
        productTags: ['storage','almacenamiento','nas'],
        productStock: 45,
        productMinStock: 20,
        productMaxStock: 50
    },
    {
        productId: '1262',
        productCode: 'SM-9897-J',
        productName: 'Memoria USB',
        productCategory: 'Storage',
        productTags: ['storage','almacenamiento','nas'],
        productStock: 5,
        productMinStock: 5,
        productMaxStock: 10
    },
    {
        productId: '1263',
        productCode: 'SM-9001-J',
        productName: 'Mouse Inalambrico',
        productCategory: 'Perifericos',
        productTags: ['mouse','inalambrico'],
        productStock: 16,
        productMinStock: 10,
        productMaxStock: 20
    }
]

export const getProducstByID = async(req: Request, res:Response) =>{
    const{ id } = req.params; 
    console.log('Parametro ID: ', id);

    const result: any=mockProduct.find((item:any) =>item.productId == id);
    console.log(result);
    res.status(200).json(result);
} 

export const newProduct = async(req: Request, res: Response)=>{

    const {
        productId,
        productCode,
        productName,
        productCategory,
        productTags,
        productStock,
        productMinStock,
        productMaxStock
    } = req.body;

mockProduct.push(req.body);
res.status(200).json({ok:true,msg:'Producto ingresado'});

}
