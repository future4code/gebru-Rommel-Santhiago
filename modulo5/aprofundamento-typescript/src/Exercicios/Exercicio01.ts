
// a)
let minhaString : string
// minhaString = 1

// O tipo number não pode ser atribuido ao tipo 'string'

// b)
let meuNumero : number | string
meuNumero = 10
meuNumero = "10"

// c)
type Person = {
    name: string,
    age: number,
    favouriteColour: Color
} 

enum Color {
    BLUE = "Blue",
    GREEN = "Green",
    YELLOW = "Yellow",
    RED = "Red",
    VIOLET = "Violet"
}

const personA: Person = {
    name: "Alice",
    age: 27,
    favouriteColour: Color.VIOLET
}

const personB: Person = {
    name: "Jhon",
    age: 32,
    favouriteColour: Color.GREEN
}

const personC: Person = {
    name: "Leticia",
    age: 26,
    favouriteColour: Color.BLUE
}