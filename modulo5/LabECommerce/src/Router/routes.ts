import { Router } from "express";

import { 
    readUsersController,
    createUserController,
    readPurchasesByUserController
 } from "../Controllers/users-controllers";

 import { 
    readProductsController,
    createProductController
 } from "../Controllers/products-controllers";

 import {
    readPurchasesController,
    createPurchaseController
 } from "../Controllers/purchases-controllers"

export const router = Router();

router.get("/users", readUsersController);
router.post('/users', createUserController);
router.get('/users/:user_id/purchases', readPurchasesByUserController);

router.get("/products", readProductsController);
router.post('/products', createProductController);

router.get("/purchases", readPurchasesController);
router.post('/purchases', createPurchaseController);