import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { clientes } from "./data";
import { idade } from "./calculaIdade"

const app = express();
app.use(express.json());
app.use(cors());

app.post('/clientes', (req: Request, res: Response) => {
    let errorCode = 500;
    try {
      const { nome, cpf, dataNascimento } = req.body;

      if(idade(dataNascimento) >= 18){
        const newCliente = {
            id: clientes.length + 1,
            nome: nome,
            cpf: cpf,
            dataNascimento: dataNascimento,
            saldo: 0,
            extrato: []
        };
    
        clientes.push(newCliente);

      } else {
        errorCode = 422;
        throw new Error("Cliente precisa ter mais de 18 anos para se cadastrar");
      };

      res.status(201).send(clientes);

    } catch (error: any) {
        res.status(errorCode).send(error.message);
    };
});

app.get("/clientes", (req: Request, res: Response) => {
    let errorCode = 500;
    try {
        if(!clientes.length){
            errorCode = 404;
            throw new Error("Não existe clientes na base de dados");
        };

        res.status(200).send(clientes);

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