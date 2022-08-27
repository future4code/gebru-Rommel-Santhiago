import express from "express";
import { UserBusiness } from "../../business/UserBusiness";
import { UserDatabase } from "../../data/UserDatabase";
import { UserController } from "../UserController";

export const userRouter = express.Router()

const userDatabase = new UserDatabase()
const userBusiness = new UserBusiness(userDatabase)
const userController = new UserController(userBusiness)

userRouter.get('/profile', (req, res)=> userController.profile(req, res))
userRouter.get('/:id', (req, res)=> userController.getProfile(req, res))

userRouter.post('/signup', (req, res)=> userController.signup(req, res))
userRouter.post('/login', (req, res)=> userController.login(req, res))
userRouter.post('/follow', (req, res)=> userController.followFriends(req, res))