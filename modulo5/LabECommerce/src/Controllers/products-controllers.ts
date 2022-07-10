import { Request, Response } from "express";
import { Product } from "../types";
import {
    createProductRepository,
    readProductsByOrderRepository,
    readProductsRepository,
} from "../Repository/products-repository";

const Errors: { [key: string]: { status: number, message: string } } = {
    PRODUCT_NOT_FOUND: { status: 404, message: "Produto não encontrado" },
    PRODUCTS_NOT_FOUND: { status: 404, message: "Não há produtos cadastrados" },
    MISSING_PARAMETERS: { status: 422, message: "É necessário informar todos os campos" },
    INVALID_PRICE: { status: 422, message: "Preço no formato invalido" },
    SOME_ERROR: { status: 500, message: "Algo deu errado" }
}

export const createProductController = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { name, price, image_url } = req.body;

        if (!name || !price || !image_url) {
            throw new Error(Errors.MISSING_PARAMETERS.message);
        };

        if (!Number(price)) {
            throw new Error(Errors.INVALID_PRICE.message)
        };

        const products = await readProductsRepository();

        const product: Product = {
            id: products.length + 1,
            name,
            price,
            image_url
        };

        await createProductRepository(product);

        res.status(200).send(`Produto ${product.name} cadastrado com sucesso!`);

    } catch (error: any) {
        switch (error.message) {
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message);
                break;
            case Errors.INVALID_PRICE.message:
                res.status(Errors.INVALID_PRICE.status).send(Errors.INVALID_PRICE.message);
                break;
            default:
                res.status(Errors.SOME_ERROR.status).send(Errors.SOME_ERROR.message);
        };
    };
};

export const readProductsController = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        let order = req.query.order as string
        let sort: string = ""

        let products

        if(order){
            if(order?.toUpperCase() !== "ASC" && order?.toUpperCase() !== "DESC"){
                order = "asc"
            }
            
            sort = "name"

           products = await readProductsByOrderRepository(sort, order)
        } else {
            products = await readProductsRepository()
        }

        if (!products.length) {
            throw new Error(Errors.PRODUCTS_NOT_FOUND.message);
        };

        res.send(products);
    } catch (error: any) {
        switch(error.message){
            case Errors.PRODUCTS_NOT_FOUND.message:
                res.status(Errors.PRODUCTS_NOT_FOUND.status).send(Errors.PRODUCTS_NOT_FOUND.message);
                break;
            default:
                res.status(Errors.SOME_ERROR.status).send(Errors.SOME_ERROR.message);
        };
    };
};