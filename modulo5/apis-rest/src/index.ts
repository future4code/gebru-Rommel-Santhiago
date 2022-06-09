import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

/**
* Exercício 1
* 
*   a. Qual método HTTP você deve utilizar para isso?
        O metodo utilizado será o GET
* 
*   b. Como você indicaria a **entidade** que está sendo manipulada?
*       A entidade é "/users"
*/

app.get("/users", (req: Request, res: Response) => {
    let errorCode = 500;
    try {
        if(!users.length){
            errorCode = 404
            throw new Error("Usuarios não encontrados");
        };

        res.status(200).send(users);

    } catch (error: any) {
        res.status(errorCode).send(error.message);
    };
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    };
});