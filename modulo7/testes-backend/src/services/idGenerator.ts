import { v4 } from "uuid";
import { IIDGenerator } from "../business/Ports";

export class IdGenerator implements IIDGenerator {
  public generate(): string {
    return v4();
  }
}

export default new IdGenerator()
