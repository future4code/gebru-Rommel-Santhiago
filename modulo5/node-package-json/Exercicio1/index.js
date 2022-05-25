/**
 * EXERCICIOS DE NODE E PACKAGE.JSON
 */

// EXERCÍCIO 1

// a) Acessamos os parametros no node atraves da process.argv[]

// b)
const colorize = require('colorize');
const print = colorize.console;

console.clear()

const name = process.argv[2]
const age = Number(process.argv[3])

if(name && age) {
    print.log(`#green[Olá, #bold[#red[${name}!]] Você tem #blue[${age}] anos. Em sete anos você terá #yellow[${age + 7}]]`)
} else {
    print.log(`#bold[Esperava 2 parâmetros só recebi um.]`)
}
