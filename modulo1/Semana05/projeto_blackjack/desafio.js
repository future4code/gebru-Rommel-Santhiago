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


const usuario = prompt("Digite seu nome");
let jogadaUsuario = [];
let jogadaMaquina = [];
const jogar = confirm(
  `Bem-vindo(a) ao jogo de Blackjack ${usuario}! \n Quer iniciar uma nova rodada?`
);

if (jogar) {
  let cartasOk = false;
  while (!cartasOk) {
    jogadaUsuario.push(comprarCarta());
    jogadaUsuario.push(comprarCarta());
    jogadaMaquina.push(comprarCarta());
    jogadaMaquina.push(comprarCarta());
    if (
      (jogadaUsuario[0].valor === 11 && jogadaUsuario[1].valor === 11) ||
      (jogadaMaquina[0].valor === 11 && jogadaMaquina[1].valor === 11)
    ) {
      jogadaUsuario = [];
      jogadaMaquina = [];
    } else {
      cartasOk = true;
    }
  }

  let comprando = true;

  while (comprando) {
    let textos = "";
    let pontos = 0;
    for (let carta of jogadaUsuario) {
      textos += carta.texto + " ";
      pontos += carta.valor;
    }

    if (pontos > 21) {
      comprando = false;
    } else {
      let confirmCompra = confirm(
        `Suas cartas são ${textos}. A carta revelada da maquina é ${jogadaMaquina[0].texto}. \n
         Deseja comprar mais uma carta?`
      );
      if (confirmCompra) {
        jogadaUsuario.push(comprarCarta());
      } else {
        comprando = false;
      }
    }
  }

  let pontosMaquina = 0;
  let textosUsuario = "";
  let pontosUsuario = 0;
  let textosMaquina = "";

  for (let carta of jogadaMaquina) {
    pontosMaquina += carta.valor;
    textosMaquina += carta.texto + " ";
  }
  for (let carta of jogadaUsuario) {
    pontosUsuario += carta.valor;
    textosUsuario += carta.texto + " ";
  }

  if (pontosUsuario <= 21) {
    while (pontosMaquina < pontosUsuario && pontosMaquina <= 21) {
      maquina.push(comprarCarta());
      pontosMaquina = 0;
      textosMaquina = "";
      for (let carta of jogadaMaquina) {
        pontosMaquina += carta.valor;
        textosMaquina += carta.texto + " ";
      }
    }
  }

  let resultado = "";
  if (pontosUsuario > pontosMaquina && pontosUsuario <= 21) {
    resultado = `${usuario} ganhou!`;
  } else if (pontosMaquina > pontosUsuario && pontosMaquina <= 21) {
    resultado = "A maquina ganhou!";
  } else if (pontosMaquina > 21 && pontosUsuario <= 21) {
    resultado = `${usuario} ganhou!`;
  } else if (pontosUsuario > 21 && pontosMaquina <= 21) {
    resultado = "A maquina ganhou!";
  } else {
    resultado = "Empate!";
  }

  alert(
    `${usuario} - Cartas: ${textosUsuario} - Pontuação: ${pontosUsuario} \n
      Maquina - Cartas: ${textosMaquina} - Pontuação: ${pontosMaquina} \n
      ${resultado}
   `
  );
} else {
  alert("O jogo acabou!");
}