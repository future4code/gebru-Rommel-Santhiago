/**
 * EXERCICIOS DE NODE E PACKAGE.JSON
 */

// EXERCÍCIO 2
const colorize = require('colorize');
const print = colorize.console;

console.clear()

const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

if(num1 && num2) {
    switch(operation){
        case "add":
            print.log(`#bold[#green[Resposta:]] #red[${num1 + num2}]`)
            break;
        case "sub":
            print.log(`#bold[#green[Resposta:]] #red[${num1 - num2}]`)
            break;
        case "mult":
            print.log(`#bold[#green[Resposta:]] #red[${num1 * num2}]`)
            break;
        case "div":
            print.log(`#bold[#green[Resposta:]] #red[${num1 / num2}]`)
            break;
    }
} else {
    console.log("Esperava 2 números só recebi um.")
}