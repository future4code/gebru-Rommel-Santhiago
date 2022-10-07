import { DogWalkingRepository } from "../business/DogWalkingRepository";
import { BaseDatabase } from "./BaseDatabase";

export class DogWalkingDatabase extends BaseDatabase implements DogWalkingRepository {

    public async getWalkway(): Promise<any> {
        try {      
          const result = await DogWalkingDatabase.connection("Dog_Walking")
            .select()

          return result[0];
        } catch (error: any) {
          throw new Error(error.message);
        }
    };
}