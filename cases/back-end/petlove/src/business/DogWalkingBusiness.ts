import { DogWalkingRepository } from "./DogWalkingRepository";

export class DogWalkingBusiness {
    constructor(private dogWalkingDatabase: DogWalkingRepository){}

    public walkway = async (): Promise<any> => {
        try {      

          return await this.dogWalkingDatabase.getWalkway();
        } catch (error: any) {
            throw new Error("Não há passeios agendados")
        };
    };
}