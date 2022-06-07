import { v4 as generateId } from 'uuid'

export const produtos = [
    {
        id: generateId(),
        name: "Notebook",
        price: 3500
    },
    {
        id: generateId(),
        name: "Smart TV",
        price: 3200
    },
    {
        id: generateId(),
        name: "Smartphone",
        price: 2500
    },
    {
        id: generateId(),
        name: "Teclado Gamer",
        price: 350
    },
    {
        id: generateId(),
        name: "headset gamer",
        price: 200
    }
]