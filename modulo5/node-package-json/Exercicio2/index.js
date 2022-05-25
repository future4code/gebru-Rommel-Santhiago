/**
 * EXERCICIOS DE NODE E PACKAGE.JSON
 */

// EXERCÍCIO 2
const colorize = require('colorize');
const print = colorize.console;

const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

if(num1 && num2) {
    switch(operation){
        case "add":
            print.log(`Soma de: #red[${num1} + ${num2}]`)
            print.log(`#bold[#green[Resposta:]] #red[${num1 + num2}]`)
            break;
        case "sub":
            print.log(`Subtração de: #red[${num1} - ${num2}]`)
            print.log(`#bold[#green[Resposta:]] #red[${num1 - num2}]`)
            break;
        case "mult":
            print.log(`Multiplicação de: #red[${num1} * ${num2}]`)
            print.log(`#bold[#green[Resposta:]] #red[${num1 * num2}]`)
            break;
        case "div":
            print.log(`Divisão de: #red[${num1} ÷ ${num2}]`)
            print.log(`#bold[#green[Resposta:]] #red[${num1 / num2}]`)
            break;
    }
} else {
    console.log("Esperava 2 números só recebi um.")
}