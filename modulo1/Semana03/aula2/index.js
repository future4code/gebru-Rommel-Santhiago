// Exercícios de interpretação de código

//1º)
// a) Os parametros serão multiplicados por 5, resultando nos valores 10 e 50

// b) Não seria impresso naada no console

//2º)
/* a) Essa função converte todo o texto em minusculas, 
procura pela palavra cenoura no texto que o usuario inserir e logo apos imprime se a palvra foi encontrada ou não
*/

// b) O console imprimira verdadeiro "true", para todos os pedidos, pois todos tem a palavra cenoura e a função é case sensitive



// Exercícios de escrita de código

// 1º)
//a)
const sobreMim = () => {
    const nome = "Rommel"
    const idade = 33
    const cidade = "Juazeiro do Norte - CE"

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou estudante.`)
}

sobreMim()

//b)
const inforUsuario = (nome, idade, endereco, profissao) => {
    nome = prompt("Digite seu nome")
    idade = Number(prompt("Digite sua idade"))
    endereco = prompt("Digite sua cidade")
    profissao = prompt("Digite sua profissão")

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`) 
}

inforUsuario()

// 2º)
//a)
const soma = (numero1, numero2) => {
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`)
}

soma(6, 12)

const comparaNumero = (numero1, numero2) => {
    console.log(`${numero1} é maio que ${numero2}? ${numero1 > numero2}`)
}

comparaNumero(8, 15)

const mensagem = (frase) => {
    console.log(`A frase "${frase}" tem ${frase.length} caracteres. E em maiusculas fica ${frase.toUpperCase()}`)
}

mensagem("Suco de manga")

const operacoesBasicas = (numero1, numero2) => {
    console.log(`Soma de ${numero1} + ${numero2} = ${numero1 + numero2}`)
    console.log(`Diferença de ${numero1} - ${numero2} = ${numero1 - numero2}`)
    console.log(`Multiplicação de ${numero1} X ${numero2} = ${numero1 * numero2}`)
    console.log(`Divisão de ${numero1} ÷ ${numero2} = ${numero1 / numero2}`)
}

operacoesBasicas(30, 3)

// DESAFIOS

// 1º)
//a)
let parametros

const arrowFunction = (parametros) => {
    
    console.log(parametros)
}

arrowFunction("Olá mundo!")


const somaSemRetorno = (primeiroValor, segundoValor) => {
    return primeiroValor + segundoValor
}

arrowFunction(`Soma dos valores é: ${somaSemRetorno(3, 4)}`)

// 2º)
const teoremaPitagoras = (cateto1, cateto2) => {
    let catetos = `${cateto1} e ${cateto2}`
    cateto1 = cateto1 * cateto1
    cateto2 = cateto2 * cateto2
    let hipotenusa = cateto1 + cateto2

    console.log(`A soma da hipotenusa dos catetos ${catetos} é: ${Math.sqrt(hipotenusa)}`)
}

teoremaPitagoras(7,5)