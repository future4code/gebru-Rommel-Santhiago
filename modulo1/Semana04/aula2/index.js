/*
Exercícios de interpretação de código

1º)
a) O codigo testa se o número inserido retorna o resto da divisão igual a zero
    se sim apresenta a mensagem "Passou no teste", se não apresenta a mensagem "Não passou no teste"

b) Passa no teste os numeros em que o resto da divisão e zero

c) Não passa no teste os numeros em que o resto da divisão e diferente de zero

2º)
a) Para receber a resposta do usuario e verificar se tem aquela opção e qual o seu valor

b) O preço da fruta  Maçã  é  R$  2.25

c) O codigo continuaria a ser execulta e apresentaria o valor da fruta como o valor de default

3º)
a) A primeira linha pede e recebe um valor inserido pelo usuario 

b) Se inserir o numero 10 mostraria a mensagem "Esse número passou no teste", se inserir o numero -10 apresentara um erro

c) Esse erro e mostrado porque a variavel mensagem é declarada apenas dentro do escopo do if, só sendo possivel usar ela localmente,
    ou seja dentro do escopo do if.

*/

// Exercícios de escrita de código

//1º)
const idade = Number(prompt("Qaul a sua idade?"))

if(idade >= 18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}


// //2º)
const turno = prompt("Que turno você estuda? M (Matutino), V (Vespertino) ou N (Noturno)")

if(turno === "M"){
    console.log("Bom dia!")
} else if(turno === "V"){
    console.log("Boa tarde!")
} else if (turno === "N"){
    console.log("Boa noite!")
}


// //3º)
switch(turno){
    case "M": 
        console.log("Bom dia!"); 
    break
    case "V":
        console.log("Boa tarde!");
    break
    case "N":
        console.log("Boa noite!");
    break
    default:
        console.log("Bem vindo!")
}

// //4º)
const generoFilme = prompt("Qual o genero do filme que vão assistir?")
const precoFilme = Number(prompt("Qual o preço do filme?"))

if(generoFilme === "fantasia" && precoFilme < 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

// // DESAFIOS
// //1º)

const generoDoFilme = prompt("Qual o genero do filme que vão assistir?")
const precoDoFilme = Number(prompt("Qual o preço do filme?"))

if(generoDoFilme === "fantasia" && precoDoFilme < 15){
    const lanche = prompt("Que lanche vai comprar?")
    console.log("Bom filme!")
    console.log(`Aproveite o seu lanche: ${lanche}`)
} else {
    console.log("Escolha outro filme :(")
}

//2º)
const nome = prompt("Qual o seu nome completo?")
let tipoDeJogo = prompt("Qual o tipo de jogo? IN(Internacional, DO(Domestico))")
let etapaJogo = prompt("Qual etapa do jogo? SF(Semi-final), DT(Decisão do terceiro) ou FI(Final)")
let categoria = Number(prompt("Qual a categoria? 1, 2, 3 ou 4"))
let quantidadeIgressos = Number(prompt("Quantidade de ingressos?"))
let valorIngresso

// ETAPA DO JOGO
const etapaEscolhida = () => {
    switch(etapaJogo){
        case "SF":
            etapaJogo = "Semi-final"
            switch(categoria){
                case 1:
                    valorIngresso = 1320
                break
                case 2:
                    valorIngresso = 880;
                break
                case 3:
                    valorIngresso = 550;
                break
                case 4:
                    valorIngresso = 220;
            };
        break
        case "DT":
            etapaJogo = "Decisão do terceiro";
            switch(categoria){
                case 1:
                    valorIngresso = 660;
                break
                case 2:
                    valorIngresso =440;
                break
                case 3:
                    valorIngresso =330;
                break
                case 4:
                    valorIngresso = 170;
            };
        break
        case "FI":
            etapaJogo = "Final"
            switch(categoria){
                case 1:
                    valorIngresso = 1980;
                break
                case 2:
                    valorIngresso = 1320;
                break
                case 4:
                    valorIngresso = 330;
            };
    }  
    return etapaJogo 
}

// TIPO DO JOGO
const tipoEscolhido = () => {
    switch(tipoDeJogo){
        case "IN":
            tipoDeJogo = "Internacional"
        break
        case "DO":
            tipoDeJogo = "Nacional"
    } 
    return tipoDeJogo
}

tipoEscolhido()
etapaEscolhida()
if(tipoEscolhido() === "Internacional"){
   valorIngresso *= 4.10
}


console.log(`
    ---- Dados da compra ----
Nome do cliente: ${nome}
Tipo de jogo: ${tipoEscolhido()}
Etapa do jogo: ${etapaEscolhida()}
Categoria do jogo: ${categoria}
Quantidade de ingressos: ${quantidadeIgressos} ingressos
    ---- Valores ----
Valor do ingresso: ${valorIngresso}
Valor total: ${valorIngresso * quantidadeIgressos}
`)