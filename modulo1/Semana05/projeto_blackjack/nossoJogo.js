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
console.log(`Bem vindo(a) ao jogo de Blackjack ${usuario}!`)

const jogar = confirm("Iniciar uma nova rodada?")

if(jogar){
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let carta1Maquina = comprarCarta()
   let carta2Maquina = comprarCarta()

   let pontosUsuario = carta1Usuario.valor + carta2Usuario.valor
   let pontosMaquina = carta1Maquina.valor + carta2Maquina.valor

   console.log(`${usuario} ${carta1Usuario.texto} ${carta2Usuario.texto} pontuação: ${pontosUsuario}`)
   console.log(`Maquina ${carta1Maquina.texto} ${carta2Maquina.texto} pontuação ${pontosMaquina}`)

   if (pontosUsuario > pontosMaquina) {
      console.log(`${usuario} ganhou!`)
  } else if (pontosMaquina > pontosUsuario) {
      console.log("A maquina ganhou!")
  } else if (pontosUsuario === pontosMaquina) {
      console.log("Empate!")
  }
} else {
   console.log("O jogo acabou!")
}