/*
Exercicios de Callback e Funções de Array

Exercícios de interpretação de código

1º)
a) Vai imprimir cada item do array como objeto e logo em seguida sera impresso
um array com três objetos para cada item encontrado

2º)
a) Sera impresso um array com apenas os nomes de cada item encontrado

3º)
a) Vai imprimir um array com todo os objetos exceto os que tiverem o nome "Chijo" 
*/

// Exercícios de escrita de código

// 1º)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 
//a)
  const nomesPets = pets.map((item) => {
     return item.nome
  })
  
  console.log(nomesPets)

//b)
const racaPets = pets.filter((item) => {
    return item.raca === "Salsicha"
 })
 
 console.log(racaPets)

//c)
const descontoPets = pets.filter((item) => {
    return item.raca === "Poodle"
})

const nomesPetsDesconto = descontoPets.map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!` 
 })

console.log(nomesPetsDesconto)


// 2º)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a)
const produtosNome = produtos.map((item) => {
    return item.nome
})

console.log(produtosNome)

const produtosComDesconto = produtos.map((item) => {
    let desconto = (item.preco * 5) / 100
    return  `${item.nome} R$:${item.preco - desconto} `
})

console.log(produtosComDesconto)

//b)
const categoriaBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})

console.log(categoriaBebidas)

//c)
const nomesYpes = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})

console.log(nomesYpes)

const compreItem = nomesYpes.map((item) =>{
    return `Compre ${item.nome} por ${item.preco}`
})

console.log(compreItem)


// DESAFIOS
//1º)
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//a)
const nomesPokemons = pokemons.map((item) => {
    return item.nome
})

console.log(nomesPokemons.sort())

//b)
const tiposPokemons = pokemons.map((item) => {
    return item.tipo
})

const pokemonsTipos = tiposPokemons.filter((item, i) => {
    return tiposPokemons.indexOf(item) === i
})

console.log(pokemonsTipos)