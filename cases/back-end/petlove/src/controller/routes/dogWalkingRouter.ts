import express from "express";
import { DogWalkingBusiness } from "../../business/DogWalkingBusiness";
import { DogWalkingDatabase } from "../../data/DogWalkingDatabase";
import { DogWalkingController } from "../DogWalkingController";

export const dogWalkingRouter = express.Router()

const dogWalkingDatabase = new DogWalkingDatabase()
const dogWalkingBusiness = new DogWalkingBusiness(dogWalkingDatabase)
const dogWalkingController = new DogWalkingController(dogWalkingBusiness)

dogWalkingRouter.get('/', (req, res)=> dogWalkingController.walkway(req, res))
