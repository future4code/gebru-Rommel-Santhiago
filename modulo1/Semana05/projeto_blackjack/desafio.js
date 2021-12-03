/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const usuario = prompt("Digite seu nome")
let jogadaUsuario = []
let maquina = []
const jogar = confirm(`Bem-vindo(a) ao jogo de Blackjack ${usuario}! \n Quer iniciar uma nova rodada?`)

if (jogar){
  let cartasOk = false
  while (!cartasOk) {
   jogadaUsuario.push(comprarCarta())
   jogadaUsuario.push(comprarCarta())
   maquina.push(comprarCarta())
   maquina.push(comprarCarta())
    if (
      (jogadaUsuario[0].valor === 11 && jogadaUsuario[1].valor === 11) ||
      (maquina[0].valor === 11 && maquina[1].valor === 11)
    ) {
      jogadaUsuario = []
      maquina = []
    } else {
      cartasOk = true
    }
  }

  let comprando = true

  while (comprando) {
    let textos = ""
    let pontos = 0
    for (let carta of jogadaUsuario) {
      textos += carta.texto + " "
      pontos += carta.valor
    }

    if (pontos > 21) {
      comprando = false
    } else {
      let confirmCompra = confirm(
        `Suas cartas são ${textos}. A carta revelada da maquina é ${maquina[0].texto}. \n
         Deseja comprar mais uma carta?`
      ) 
      if (confirmCompra){
         jogadaUsuario.push(comprarCarta())
      } else {
        comprando = false
      }
    }
  }

  let pontosMaquina = 0
  let pontosjogadaUsuario = 0
  let textosMaquina = ""
  let textosjogadaUsuario = ""

  for (let carta of maquina) {
   pontosMaquina += carta.valor
   textosMaquina += carta.texto + " "
  }
  for (let carta of jogadaUsuario) {
   pontosjogadaUsuario += carta.valor
   textosjogadaUsuario += carta.texto + " "
  }

  if (pontosjogadaUsuario <= 21) {
    while (pontosMaquina < pontosjogadaUsuario && pontosMaquina <= 21) {
      maquina.push(comprarCarta())
      pontosMaquina = 0
      textosMaquina = ""
      for (let carta of maquina) {
         pontosMaquina += carta.valor
         textosMaquina += carta.texto + " "
      }
    }
  }

  let resultado = ""
  if (pontosjogadaUsuario > pontosMaquina && pontosjogadaUsuario <= 21) {
    resultado = `${usuario} ganhou!`
  } else if (pontosMaquina > pontosjogadaUsuario && pontosMaquina <= 21) {
    resultado = "A maquina ganhou!"
  } else if (pontosMaquina > 21 && pontosjogadaUsuario <= 21) {
    resultado = `${usuario} ganhou!`
  } else if (pontosjogadaUsuario > 21 && pontosMaquina <= 21) {
    resultado = "A maquina ganhou!"
  } else {
    resultado = "Empate!"
  }

  alert(
    `${usuario} - Cartas: ${textosjogadaUsuario} - Pontuação: ${pontosjogadaUsuario} \n
      Maquina - Cartas: ${textosMaquina} - Pontuação: ${pontosMaquina} \n
      ${resultado}
   `)
} else {
  alert("O jogo acabou.")
}