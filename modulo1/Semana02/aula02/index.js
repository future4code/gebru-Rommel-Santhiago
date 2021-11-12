// Exercícios de interpretação de código

// 1º)
// a.) false

// b.) false

// c.) true

// d.) boolean

// 2º)
// O console ira concatenar os dois números como uma string 

//3º)
// Solução transformar as strings do prompt em números utilizando o Number
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!")) 

const soma = primeiroNumero + segundoNumero

console.log(soma)

// Exercícios de escrita de código

// 1º)
let suaIdade = Number(prompt("Digite a sua idade!"))
let idadeAmigo = Number(prompt("Digite a idade do seu amigo!"))

const comparacao = suaIdade > idadeAmigo
const diferencaIdade = suaIdade - idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", comparacao)
console.log("A difença de idade é:", diferencaIdade)

//2º)
let numeroPar = Number(prompt("Digite um numero par"))
let resultado = numeroPar % 2

console.log("O resto da divizão é:", resultado)
// Por padrão o resto da divizão sempre é zero

// Quando inserido um numero impar sempre resta 1

//3º)
let idade = Number(prompt("Digite a sua idade"))
let idadeEmMeses = idade * 12
let idadeEmDias = idade * 365 
let idadeEmHoras = idade * (365 * 24)

console.log("Idade em meses:", idadeEmMeses)
console.log("Idade em dias:", idadeEmDias)
console.log("Idade em horas:", idadeEmHoras)

//4º)
let primeiroValor = Number(prompt("Digite o primeiro numero"))
let segundoValor = Number(prompt("Digite o segundo numero"))

console.log("Primeiro numero", primeiroValor)
console.log("Segundo numero", segundoValor)

console.log("O primeiro numero é maior que segundo?", primeiroValor > segundoValor)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero == segundoValor)
console.log("O primeiro numero é divisível pelo segundo?", (primeiroValor % segundoValor) / 2 == 0)
console.log("O segundo numero é divisível pelo primeiro?", (segundoValor % primeiroValor) / 2 == 2)

// DESAFIOS
//1º)
let fahrenheit = 77
let celsius = 80
let celToKelvin = celsius + 273.15
let celToFarh = (celsius * 9) / 5 + 32
let farhToKelvin = (fahrenheit - 32) * (5/9) + 273.15

console.log("°" + fahrenheit, "Farhenheit para Kelvin: °" + farhToKelvin)
console.log("°" + celsius, "Celsius para Farhenheit: °" + celToFarh)

celsius = 30
celToFarh = (celsius * 9) / 5 + 32
celToKelvin = celsius + 273.15
console.log("°" + celsius, "Celsius para Farhenheit: °" + celToFarh)
console.log("°" + celsius, "Celsius para Kelvin: °" + celToKelvin)

celsius = Number(prompt("Digite a temperatura Celsius"))
celToKelvin = celsius + 273.15
console.log("°" + celsius, "Celsius para Kelvin: °" + celToKelvin)

//2º)
let quiloWattsHora = 0.05
let consumoQwHora = 280 * quiloWattsHora

console.log("O valor de 280 Quilo-Watts hora é R$" + consumoQwHora)

let desconto = (consumoQwHora * 15) / 100
let valorComDesconto = consumoQwHora - desconto

console.log("Valor com desconto de 15% R$" + valorComDesconto)

//3º)
let libra = 20
let onca = 10.5
let milha = 100
let ft = 50
let galao = 103.56
let xicara = 450
let libraToKg = libra * 0.453592
let oncaToKg = onca * 0.0283495
let milhaToM = milha * 1609.34
let ftToM = ft * 0.3048
let galaoToLitro = galao * 3.78541
let xicaraToLitro = xicara * 0.150

console.log("20Lbs equivalem a", libraToKg + "Kg")
console.log("10.5oz equivalem a", oncaToKg + "Kg")
console.log("100mi equivalem a", milhaToM + "m")
console.log("50ft equivalem a", ftToM + "m")
console.log("103.56gal equivalem a", galaoToLitro + "L")
console.log("450xic equivalem a", xicaraToLitro + "L")

let calcUsuario = Number(prompt("Digite o valor em libras"))
libraToKg = calcUsuario * 0.453592
console.log(calcUsuario + "Lbs Equivalem a", libraToKg + "Kg")