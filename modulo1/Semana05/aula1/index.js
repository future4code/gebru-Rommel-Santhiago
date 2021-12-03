// Exercícios de interpretação de código

/* 
1º) O valor do i é incrementado ao valor da variavel valor e na rodada seguinte isso duplica o seu valor
até que a variavel i tenha o valor 5 e a variavel valor chega ao valor 10

2º) 
a) O for of vai percorrer o array lista e para cada numero maior que 18 ele vai dar um console.log

b) Para ver o indice de cada numero é só chamar o metodo indexOf() na lista de numeros e passar os numeros que foram aprovados
    tipo: lista.indexOf(numero)


3º) O resultado seria quatro linhas com asteriscos, na primeira 1, na segunda 2, na terceira 3 e na quarta 4
*/

// Exercícios de escrita de código

// 1º)
let quantidadePet = prompt("Quantos bixinhos de estimação você tem?")

if(quantidadePet > 0){
    let pets = prompt("Qual o nome dele(s)?")
    arrayPets = pets.split(" ")
    console.log(arrayPets)
} else {
    console.log("Que pena! Você pode adotar um pet!")
}

// 2º)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let arr of array){
    console.log(arr)
}

for(let arr of array){
    console.log(arr / 10)
}

let paresArray = []


for(let par of array){
  if(par % 2 == 0){
    paresArray.push(par)
  }     
}

console.log(paresArray)

for(arr of array){
    console.log(`O elemento do indice ${array.indexOf(arr)} é: ${arr}`)
}

let maiorNumero = 0

for (let i = 0; i < array.length; i++) {
    const elemento = array[i]
    if (elemento > maiorNumero) {
        maiorNumero = elemento
    }
}

let menorNumero = maiorNumero

for (let i = 0; i < array.length; i++) {
    const elemento = array[i]
    if (elemento < menorNumero) {
        menorNumero = elemento
    }
}
console.log(`O maior numero é : ${maiorNumero} e o menor numero é: ${menorNumero}`)

// DESAFIOS
//1º)
alert("Vamos jogar?")
const numeroEscolhido = Number(prompt("Insira o numero a ser adivinhado:"))
let numeroUsuario = Number(prompt("Chute um numero:"))
let tentativas = 0

while (numeroUsuario !== numeroEscolhido) {
    console.log(`O numero chutado foi: ${numeroUsuario}`)
    if(numeroUsuario < numeroEscolhido){
        console.log("Errrrrrrrou, é maior")
    } else if(numeroUsuario > numeroEscolhido) {
        console.log("Errrrrrrrou, é menor")
    }

    tentativas += 1

    numeroUsuario = Number(prompt("Chute outro número:"))
}

console.log(`O numero chutado foi: ${numeroUsuario}`)
console.log("Acertou!!!")
console.log(`O numero de tentativas foi ${tentativas}`)


//2º)
alert("Vamos jogar contra a maquina?")

const numeroMaquina = Math.floor(Math.random() * 100)
let usuarioNumero = Number(prompt("Chute um numero:"))
let tentativasVsMaquina = 0

while (usuarioNumero !== numeroMaquina) {
    console.log(`O numero chutado foi: ${usuarioNumero}`)
    if(usuarioNumero < numeroMaquina){
        console.log("Errrrrrrrou, é maior")
    } else if(usuarioNumero > numeroMaquina) {
        console.log("Errrrrrrrou, é menor")
    }

    tentativasVsMaquina += 1
    usuarioNumero = Number(prompt("Chute outro número:"))
}

console.log(`O numero chutado foi: ${usuarioNumero}`)
console.log("Acertou!!!")
console.log(`O numero de tentativas foi ${tentativasVsMaquina}`)