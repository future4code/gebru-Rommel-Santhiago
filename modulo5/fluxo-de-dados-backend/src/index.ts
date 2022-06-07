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
        if(!produtos){
            throw new Error("Não há uma lista de produtos")
        }

        const listaDeProdutos = produtos.map((produto) => {
            return produto
        })

        res.status(200).send(listaDeProdutos)

    } catch (error) {
        res.status(404).send(error)
    }
})

app.put("/produtos/upDateProduto/", (req: Request, res: Response) => {
    try {
        const produtoId = req.query.produtoId
        const priceEdited  = req.body.priceEdited

        if(!produtos){
            throw new Error("Não há uma lista de produtos")
        }

        produtos.find(produto => {
            if(produto.id === produtoId){
                const index = produtos.indexOf(produto)
                produto = {
                    id: produto.id,
                    name: produto.name,
                    price: priceEdited
                }
                produtos[index] = produto
            }
        })

        res.status(200).send(produtos)

    } catch (error) {
        res.status(404).send(error)
    }
})

app.delete("/produtos/delete", (req: Request, res: Response) => {
    try {
        const produtoId = req.query.produtoId

        if(!produtos){
            throw new Error("Não há uma lista de produtos")
        }

        if(!produtoId){
            throw new Error("Produto não encontrado")
        }

        produtos.find(produto => {
            if(produto.id === produtoId){
                const index = produtos.indexOf(produto)
                produtos.splice(index, 1)
            }
        })

        res.status(200).send(produtos)

    } catch (error) {
        res.send(error)
    }
    
})

app.listen(3003, () => {
    console.log("Servidor rodando em http://localhost:3003")
})