//Exercícios de interpretação de código

//1º)
let array
console.log('a. ', array)
// //a) undefined - Nada definido

array = null
console.log('b. ', array)
// //b) null - Array é um objeto nulo ou vazio

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//c) 11 - Length conta quantos indices tem no array

let i = 0
console.log('d. ', array[i])
//d) 3 - O indice [i] representa o primeiro numero do array anterior

array[i+1] = 19
console.log('e. ', array)
//e) array(11) - Imprime o array da letra C

const valor = array[i+6]
console.log('f. ', valor)
//f) 9 - Soma o primeiro numero do array com 6


//2º)
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
// RESPOSTA - O toUppperCase vai transformar toda a frase em letras maiúsculas e o replaceAll vai trocar todas as letra "A" por "I"



// Exercícios de escrita de código

//1º) 
const nomeDoUsuario = prompt("Digite seu nome")
const emailDoUsuario  = prompt("Digite seu email")

console.log(`O email ${emailDoUsuario } foi cadastrado com successo. Seja bem vindo ${nomeDoUsuario}`)

let comidasFavoritas = ["Macarrão", "Salada", "Cuscuz", "Sardinha", "Camarão"]

console.log(comidasFavoritas)

console.log(`Essas são as minhas comidas favoritas\n${comidasFavoritas.join("\n")}`)

let comida = [prompt("Digite sua comida favorita")]

comidasFavoritas.splice(1, 1, comida[0])

console.log(`Essas são as minhas comidas favoritas\n${comidasFavoritas.join("\n")}`)

//2º) 

let listaDeTarefas = []
let tarefa1 = [prompt("Digite a primeira tarefa")]
let tarefa2 = [prompt("Digite a segunda tarefa")]
let tarefa3 = [prompt("Digite a terceira tarefa")]

listaDeTarefas.splice(0, 0, tarefa1[0], tarefa2[0], tarefa3[0])

console.log(listaDeTarefas)

let removerTarefa = Number(prompt("Qual o indece da tarefa realizada?")) 

listaDeTarefas.splice(removerTarefa, 1)

console.log(listaDeTarefas)



// DESAFIOS

//1º)
const fraseUsuario = prompt("Digite uma frase")
const separador = /\s* \s*/
let convertFrase = fraseUsuario.split(separador)

console.log(convertFrase)

//2º)

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log("Fruta:", frutas[2], "Quantidade de letras:", frutas[2].length)