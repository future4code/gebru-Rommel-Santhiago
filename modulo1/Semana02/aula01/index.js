// INTERPRETAÇÃO DE CÓDIGO

// 1º) 
let a = 10
let b = 10

console.log(b) // 10

b = 5
console.log(a, b) // 10 5

// 2º)
let a2 = 10
let b2 = 20
c = a2
b2 = c
a2 = b2

console.log(a, b, c) // 10 10 10

let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let valorDiaria = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${valorDiaria/horasTrabalhadas} por hora`)

// ESCRITA DE CÓDIGO

// 1º)
let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

// Nome e idade tiveram seu tipos undefined por não terem sido atribuidos algum valor

nome = prompt("Qual o seu nome?")
idade = prompt("Qual sua idade?")

console.log(typeof nome)
console.log(typeof idade)

// Agora os tipos das variaveis retornam como string

console.log("Olá", nome, "você tem", idade, "anos")


// 2º)

let corDaRoupa = true
let cafe = true
let passeio = false
console.log("Você está usando uma roupa azul hoje?", corDaRoupa)
console.log("Você tomou café da manhã hojé?", cafe)
console.log("Você foi passear hojé?", passeio)

// 3º)

let a3 = 10
let b3 = 25
let c2 = a3

console.log("Valor de A:", a3)
console.log("Valor de B:", b3)

a3 = b3
b3 = c2

console.log("O novo valor de a é", a3) // O novo valor de a é 25
console.log("O novo valor de b é", b3) // O novo valor de b é 10

// DESAFIOS

// Soma
let num1 = 5
let num2 = 10
let resultado = num1 + num2

console.log("O resultado da soma de", num1, "+", num2, "é igual a", resultado)

// Multiplicação

let number1 = 8
let number2 = 5
let total = number1 * number2

console.log("O resultado da multiplicação de", number1, "X", number2, "é igual a", total)