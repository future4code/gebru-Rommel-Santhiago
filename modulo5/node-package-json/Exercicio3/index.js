/**
 * EXERCICIOS DE NODE E PACKAGE.JSON
 */

// EXERCÍCIO 3
const fs = require('file-system');
const myTasks = require('./myTasks.json')
const colorize = require('colorize');
const print = colorize.console;

console.clear()

const tasks = myTasks

const task = process.argv[2]

tasks.push(task)

print.log(`#bold[Tarefa adicionada com sucesso!]`)
console.log(``)
print.log(`#bold[#red[Tarefas:]]`, tasks)

fs.writeFile('myTasks.json', JSON.stringify(tasks), function (err) {
  if (err) throw err;
  print.log('#green[Updated!]');
});