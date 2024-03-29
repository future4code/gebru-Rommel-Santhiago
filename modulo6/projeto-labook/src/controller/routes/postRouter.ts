import express from "express"
import { PostBusiness } from "../../business/PostBusiness"
import { PostFirestoreDatabase } from "../../data/firestore/PostFirestoreDatabase";
import { PostDatabase } from "../../data/mySQL/PostDatabase"
import { PostController } from "../PostController"

export const postRouter = express.Router()

// const postFirestoreDatabase = new PostFirestoreDatabase()
const postDatabase = new PostDatabase()
const postBusiness = new PostBusiness(postDatabase)
const postController = new PostController(postBusiness)

postRouter.post("/create", (req, res) => postController.createPost(req, res))
postRouter.get("/user/:id", (req, res) => postController.feedUser(req, res))
postRouter.get("/:id", (req, res) => postController.getPost(req, res))