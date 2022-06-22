import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';

import { 
    getActorById,
    getActorByName, 
    countActorsByGender, 
    updateActor, 
    deleteActor, 
    avgSalary, 
    createActor 
} from './index'

const app = express();

app.use(express.json());
app.use(cors());

app.get('/actor/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await getActorById(id);

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send("Unexpected error");
    };
});

app.get('/actor', async (req: Request, res: Response) => {
    try {
        const name = req.query.name as string;
        const result = await getActorByName(name);

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send("Unexpected error");
    };
});

app.get('/actor', async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender as string;
        const result = await countActorsByGender(gender);

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send("Unexpected error");
    };
});

app.put('/actor/update/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const salary = req.body.salary;
        const result = await updateActor(id, salary);

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send("Unexpected error");
    };
});

app.delete('/actor', async (req: Request, res: Response) => {
    try {
        const id = req.query.id as string;
        const result = await deleteActor(id);

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send("Unexpected error");
    };
});

app.get('/average-salary', async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender as string;
        const result = await avgSalary(gender);

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send("Unexpected error");
    };
});

app.post('/createActor', async (req: Request, res: Response) => {
    try {
        await createActor(
          req.body.id,
          req.body.name,
          req.body.salary,
          new Date(req.body.dateOfBirth),
          req.body.gender
        );
    
        res.status(200).send("Actor created successfully!");
      } catch (err: any) {
        res.status(400).send({
          message: err.message
        });
    };
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in ${address.address}:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    };
});

export default app;