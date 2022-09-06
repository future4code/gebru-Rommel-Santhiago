import { UserBusiness } from "../../src/business/UserBusiness";
import { HashManagerMock } from "./mocks/HashManagerMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { TokenGeneratorMock } from "./mocks/TokenGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

const userDatabaseMock = new UserDatabaseMock();
const idGeneratorMock = new IdGeneratorMock();
const tokenGeneratorMock = new TokenGeneratorMock();
const hashGeneratorMock = new HashManagerMock();

const userBusinessMock = new UserBusiness(
  userDatabaseMock,
  hashGeneratorMock,
  idGeneratorMock,
  tokenGeneratorMock
);

describe("getUserById", () => {
	// (a)
   test("Should catch error when id is not registered", async () => {
    expect.assertions(2)

    try {
      await userBusinessMock.getUserById("abcd", "abc123")
    } catch (error: any) {
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe("User not found")
    }
  })
    
	// (b)
  test("Should return respective user when id is registered", async () => {
    expect.assertions(2)
    
    try {
      const getUserById = jest.fn(
        (id: string) => userBusinessMock.getUserById(id, "abc123")
      )
        
      const result = await getUserById("abc")

      expect(getUserById).toHaveBeenCalledWith("abc")
      expect(result).toEqual({
        id: "id_mock_admin",
        name: "astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN",
      })
    } catch (error: any) {
      console.log(error.message)
    }
  })
})
