// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Digite uma altura"))
  let largura = Number(prompt("Digite uma largura"))

  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite uma ano atual"))
  let anoDeNascimento = Number(prompt("Digite ano de nascimento"))

  console.log(anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let pesoImc = Number(prompt("Digite seu peso"))
  let alturaImc = Number(prompt("Digite sua altura"))
  let imc = pesoImc / (alturaImc * alturaImc)

  return imc.toFixed(1) 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nomeUsuario = prompt("Digite seu nome")
  let idade = Number(prompt("Digite sua idade"))
  let email = prompt("Digite sua email")

  console.log(`Meu nome é ${nomeUsuario}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Digite cor favorita 1")
  let cor2 = prompt("Digite cor favorita 2")
  let cor3 = prompt("Digite cor favorita 3")
  let coresFavoritas = [cor1, cor2, cor3]

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let emMaiuscula = prompt("Digite uma palavra")
  
  return emMaiuscula.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let custoEspetaculo = Number(prompt("Digite o custo do espetaculo"))
  let valorDoIngresso = Number(prompt("Digite o valor do ingresso"))
  let vendaMinima = custoEspetaculo / valorDoIngresso

  return vendaMinima
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let indiceX = array[0]
  let indiceY = array[array.length - 1]
  array.splice(0,1, indiceY)
  array.splice(array.length -1, 1, indiceX)

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const str1 = string1.toUpperCase()
  const str2 = string2.toUpperCase()
  if(str1 == str2 && str1.includes(str2)){
    return true
  } else {
    return false
  }
} 

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoDeNascimento = Number(prompt("Digite seu ano de nascimento"))
  const tempoDeEmissaoRg = anoAtual - Number(prompt("Digite o ano de emissão do RG"))
  let idadePessoa = anoAtual - anoDeNascimento

  console.log("Idade", idadePessoa)
  console.log("Tempo de emissão", tempoDeEmissaoRg)
  console.log(idadePessoa <= 20 && tempoDeEmissaoRg >= 5 || 
    idadePessoa >= 20 && idadePessoa <= 50 && tempoDeEmissaoRg >= 10 ||
    idadePessoa > 50 && tempoDeEmissaoRg >= 15)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoInserido = Number(prompt("Digite o ano a verificar"))
  let anoBissexto = anoInserido % 400 == 0 || (anoInserido % 4 == 0 && anoInserido % 100 != 0)

  return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 Anos?")
  const escolaridade = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  const aprovado = idade == "sim" && escolaridade == "sim" && disponibilidade == "sim"

  console.log(aprovado)
}