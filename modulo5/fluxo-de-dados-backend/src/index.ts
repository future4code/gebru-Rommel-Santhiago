import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'

import { produtos } from './data'

const app = express()

app.use(express.json())
app.use(cors())

const Errors: { [key: string]: { status: number, message: string } } = {
    PRODUTO_NOT_FOUND: { status: 404, message: "Produto não encontrado" },
    MISSING_PARAMETERS: { status: 422, message: "Informação faltando. Consulte a documentação" },
    PRICE_PARAMETER: { status: 406, message: "O preço precisa ser um numéro" },
    PRICE_PARAMETER_NULL: { status: 406, message: "O preço não pode ser menor ou igual a zero" },
    NAME_PARAMETER: { status: 406, message: "O nome precisa ser uma string" },
    SOME_ERROR: { status: 500, message: "Algo deu errado" }
}

app.get("/test", (req: Request, res: Response) => {
    try {
        res.status(200).send("API funcionando!")
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post("/produtos", (req: Request, res: Response) => {
    try {
        const { name, price } = req.body
        
        if(+price <= 0){
            throw new Error(Errors.PRICE_PARAMETER_NULL.message)
        }

        if(!name || !price){
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        if(price !== +price){
            throw new Error(Errors.PRICE_PARAMETER.message)
        }

        if(name !== name.toString()){
            throw new Error(Errors.NAME_PARAMETER.message)
        }
    
        produtos.push({
            id: generateId(),
            name,
            price
        })
    
        res.status(201).send(produtos)

    } catch (error: any) {
        switch(error.message){
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break;            
            case Errors.PRICE_PARAMETER.message:
                res.status(Errors.PRICE_PARAMETER.status).send(Errors.PRICE_PARAMETER.message)
                break;
            case Errors.PRICE_PARAMETER_NULL.message:
                res.status(Errors.PRICE_PARAMETER_NULL.status).send(Errors.PRICE_PARAMETER_NULL.message)
                break;
            case Errors.NAME_PARAMETER.message:
                res.status(Errors.NAME_PARAMETER.status).send(Errors.NAME_PARAMETER.message)
                break;
            default:
                res.status(Errors.SOME_ERROR.status).send(Errors.SOME_ERROR.message)
        }
    }
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
        
        if(+priceEdited <= 0){
            throw new Error(Errors.PRICE_PARAMETER_NULL.message)
        }

        if(!priceEdited){
            throw new Error(Errors.MISSING_PARAMETERS.message)
        }

        if(priceEdited !== +priceEdited){
            throw new Error(Errors.PRICE_PARAMETER.message)
        }

        if(!produtoId){
            throw new Error(Errors.PRODUTO_NOT_FOUND.message)
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

    } catch (error: any) {
        switch(error.message){
            case Errors.MISSING_PARAMETERS.message:
                res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
                break;            
            case Errors.PRICE_PARAMETER.message:
                res.status(Errors.PRICE_PARAMETER.status).send(Errors.PRICE_PARAMETER.message)
                break;
            case Errors.PRICE_PARAMETER_NULL.message:
                res.status(Errors.PRICE_PARAMETER_NULL.status).send(Errors.PRICE_PARAMETER_NULL.message)
                break;
            case Errors.PRODUTO_NOT_FOUND.message:
                res.status(Errors.PRODUTO_NOT_FOUND.status).send(Errors.PRODUTO_NOT_FOUND.message)
                break;
            default:
                res.status(Errors.SOME_ERROR.status).send(Errors.SOME_ERROR.message)
        }
    }
})

app.delete("/produtos/delete", (req: Request, res: Response) => {
    try {
        const produtoId = req.query.produtoId

        if(!produtoId){
            throw new Error(Errors.PRODUTO_NOT_FOUND.message)
        }

        produtos.find(produto => {
            if(produto.id === produtoId){
                const index = produtos.indexOf(produto)
                produtos.splice(index, 1)
            }
        })

        res.status(200).send(produtos)

    } catch (error: any) {
        switch(error.message){
            case Errors.PRODUTO_NOT_FOUND.message:
                res.status(Errors.PRODUTO_NOT_FOUND.status).send(Errors.PRODUTO_NOT_FOUND.message)
                break;
            default:
                res.status(Errors.SOME_ERROR.status).send(Errors.SOME_ERROR.message)
        }
    }
    
})

app.listen(3003, () => {
    console.log("Servidor rodando em http://localhost:3003")
})