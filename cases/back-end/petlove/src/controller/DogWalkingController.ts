import { Request, Response } from "express";
import { DogWalkingBusiness } from "../business/DogWalkingBusiness";

export class DogWalkingController {
    constructor(private dogWalkingBusiness: DogWalkingBusiness){}

    public walkway = async (req: Request, res: Response) => {
        try {
            const walkwayInfo = await this.dogWalkingBusiness.walkway();
  
            res.status(200).send(walkwayInfo)
        } catch (error: any) {
            res.status(400).send("Não há passeios agendados");
        }
    }
}