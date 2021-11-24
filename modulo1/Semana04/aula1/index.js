/*
Exercícios de interpretação de código

1º)
a) Vai ser impresso o nome do Matheus
b) Vai ser impresso o nome da Virginia
c) Vai ser impresso o ultimo objeto do array

2º) 
a) Vai ser impresso o objeto [nome: Juca, idade: 3, raca: SRD] e nos demais sera alterado apenas o nome
[nome: Juba], [nome: Jubo]
b) A sintax de tres pontos copia os demais atributos do objeto alterando apenas o que lhe for imposto

3º)
a) Vai ser impresso false e undefined
b) Esses valores foram apresentados porque o atributo "backender" foi dado como false 
e o atributo altura não foi definido no objeto
*/

/*
Exercícios de escrita de código
*/

// 1º)
// a)
const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }

 console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)


 //b)
 const novaPessoa = {
     ...pessoa, apelidos: ["Nanda", "Nandinha", "Nan"]
 }

 console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos}`)


 //2º)
 //a)
const primeiraPessoa = {
	nome: "Bruno", 
    idade: 23, 
	profissao: "Instrutor"
}

const segundaPessoa = {
    nome: "Thamyres", 
    idade: 28, 
	profissao: "Professora"
}

const pessoas = [
    [primeiraPessoa.nome, primeiraPessoa.nome.length, primeiraPessoa.idade, primeiraPessoa.profissao, primeiraPessoa.profissao.length], 
    [segundaPessoa.nome, segundaPessoa.nome.length, segundaPessoa.idade, segundaPessoa.profissao, segundaPessoa.profissao.length]
]

const criarPessoa = (pessoas) => {
    
    console.log(pessoas)
}

criarPessoa(pessoas)


//3º)
const carrinho = []

const mamao = {nome: "Mamão", disponibilidade: true}
const banana = {nome: "Banana", disponibilidade: true}
const uva = {nome: "Uva", disponibilidade: true}


const encherCarrinho = (fruta) => {   
    carrinho.push(fruta)
}

encherCarrinho(mamao)
encherCarrinho(banana)
encherCarrinho(uva)

console.log(carrinho)



// DESAFIOS
//1º)
const criarUsuario = () => {
    const nome = prompt("Qual o seu nome?")
    const idade = prompt("Qual sua idade?")
    const profissao = prompt("Qual sua profissão?")

    const usuario = {nome, profissao, idade }

    console.log(usuario)
}

criarUsuario()


//2º)
const filme1 = {
    titulo: "Como Treinar o Seu Dragão",
    anoLancamento: 2010
}

const filme2 = {
    nome: "Megamente",
    anoLancamento: 2010
}

const lancamentoFilme = () => {
    console.log("O primeiro filme foi lançado antes do segundo?", filme1.anoLancamento < filme2.anoLancamento)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", filme1.anoLancamento <= filme2.anoLancamento)
}

lancamentoFilme()

//3º)
const estoque = (fruta) => {
    fruta.disponibilidade = false
}

estoque(banana)

console.log(carrinho)