import express from "express";
import { UserBusiness } from "../../business/UserBusiness";
import { UserFirestoreDatabase } from "../../data/firestore/UserFirestoreDatabase";
import { UserDatabase } from "../../data/mySQL/UserDatabase";
import { UserController } from "../UserController";

export const userRouter = express.Router()

// const userFirestoreDatabase = new UserFirestoreDatabase()
const userDatabase = new UserDatabase()
const userBusiness = new UserBusiness(userDatabase)
const userController = new UserController(userBusiness)

userRouter.post('/create', (req, res)=> userController.createUser(req, res))
userRouter.post('/:id', (req, res)=> userController.makeFriendship(req, res))
