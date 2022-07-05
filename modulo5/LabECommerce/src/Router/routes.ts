import { Router } from "express";

import { 
    readUsersController,
    createUserController
 } from "../Controllers/users-controllers";

 import { 
    readProductsController,
    createProductController
 } from "../Controllers/products-controllers";

export const router = Router();

router.get("/users", readUsersController);
router.post('/users', createUserController);
router.get("/products", readProductsController);
router.post('/products', createProductController);