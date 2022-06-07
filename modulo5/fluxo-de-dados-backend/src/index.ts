import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'

import { produtos } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/test", (req: Request, res: Response) => {
    try {
        res.status(200).send("API funcionando!")
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post("/produtos", (req: Request, res: Response) => {
    const { name, price } = req.body

    produtos.push({
        id: generateId(),
        name,
        price
    })

    res.status(201).send(produtos)
})

app.get("/produtos", (req: Request, res: Response) => {
    try {
        if(produtos){
            const listaDeProdutos = produtos.map((produto) => {
                return produto
            })
            res.status(200).send(listaDeProdutos)
        } else {
            throw new Error("Não há uma lista de produtos")
        }
    } catch (error) {
        res.status(404).send(error)
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando em http://localhost:3003")
})