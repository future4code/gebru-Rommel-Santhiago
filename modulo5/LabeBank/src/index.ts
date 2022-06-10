import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { clientes } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

app.post('/clientes', (req: Request, res: Response) => {
    try {
      const { nome, cpf, dataNascimento } = req.body;

      const newCliente = {
        id: clientes.length + 1,
        nome: nome,
        cpf: cpf,
        dataNascimento: dataNascimento,
        saldo: 0,
        extrato: []
      };

      clientes.push(newCliente);

      res.status(201).send(clientes);

    } catch (error) {
      res.send(error);
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