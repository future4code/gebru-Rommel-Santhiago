import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, User, USER_TYPE } from "./data";

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
            errorCode = 404;
            throw new Error("Usuarios não encontrados");
        };

        res.status(200).send(users);

    } catch (error: any) {
        res.status(errorCode).send(error.message);
    };
});

/**
 * Exercício 2
 *  a. Como você passou os parâmetros de type para a requisição? Por quê?
        Passei atraves da query, por ser mais facil e intuitivo passar esse tipo de informação por query do que
        por url
 *  b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
        Sim, fazendo uma validação pelo atributo USER_TYPE
 */

app.get("/users/type", (req: Request, res: Response) => {
    let errorCode = 500;
    try {
        const type = req.query.type as string;

        if(!type) {
            errorCode = 422;
            throw new Error("Especifique um tipo de usuário válido: 'NORMAL' ou 'ADMIN'");
        };

        if(type.toLowerCase() !== USER_TYPE.NORMAL.toLowerCase() 
            && type.toLowerCase() !== USER_TYPE.ADMIN.toLowerCase()) {
            errorCode = 422;
            throw new Error("Inserir tipo de usuário válido: 'NORMAL' ou 'ADMIN'");
        };

        const usersType = users.filter(user => user.type.toLowerCase() === type.toLowerCase());

        if(!usersType.length) {
            errorCode = 404
            throw new Error("Não há usuarios na base de dados");
        };

        res.status(200).send(usersType);

    } catch (error: any) {
        res.status(errorCode).send(error.message);
    };
});

/**
 * Exercício 3
    a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
        Normalmente envia se pela query
    b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
 */

app.get("/users/search", (req: Request, res: Response) => {
    let errorCode = 500;
    try {
        const name = req.query.name as string;

        if(!name) {
          errorCode = 422;
          throw new Error("Insira um nome para busca!");
        };
    
        const user = users.filter(user => user.name.toLowerCase() === name.toLowerCase());
    
        if(!user.length) {
          errorCode = 404;
          throw new Error("Usuário não encontrado");
        };

        res.status(200).send(user);

    } catch (error: any) {
        res.status(errorCode).send(error.message);
    };
});

/**
 * Exercício 4
    a. Mude o método do endpoint para `PUT`. O que mudou?
        Nada mudou
    b. Você considera o método `PUT` apropriado para esta transação? Por quê?
        Semanticamente não, por que o seu funcionamento e similar.
 */

app.post('/users', (req: Request, res: Response) => {
    let errorCode = 500;
    try {
      const { name, email, type, age } = req.body;
  
      if(!name || !email || !type || !age) {
        errorCode = 422;
        throw new Error("Faltam parâmetros a serem preenchidos no body");
      };
  
      if(type != USER_TYPE.NORMAL && type != USER_TYPE.ADMIN) {
        errorCode = 422;
        throw new Error("Inserir um tipo de usuário válido: 'NORMAL' ou 'ADMIN'");
      };

      users.find((user) => {
          if(name === user.name || email === user.email) {
            errorCode = 422;
            throw new Error("Usuário já existe na base de dados");
          };
      });
  
      const newUser: User = {
        id: users.length + 1,
        name: name,
        email: email,
        type: type,
        age: age
      };
  
      users.push(newUser);

      res.status(201).send(users);
  
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