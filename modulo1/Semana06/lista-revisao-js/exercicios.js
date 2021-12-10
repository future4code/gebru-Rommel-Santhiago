// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   let arr = array
   return arr.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arr = array
    return arr.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  arr = array
  const compararNumeros = (a, b) => {
    return a - b
  }
  return arr.sort(compararNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let paresArray = []

    for(let par of array){
      if(par % 2 == 0){
        paresArray.push(par)
      }     
    }

    return paresArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const paresArray = array.filter((item) => {
        return item % 2 === 0
    })

    const paresElevados = paresArray.map((item) => {
        return item *= item
    })

    return paresElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0

    for (let numero of array) {
        const elemento = numero
        if (elemento > maiorNumero) {
            maiorNumero = elemento
        }
    }

    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = 0 
    let arr = [num1, num2]   

    for (let numero of arr) {
        const elemento = numero
        if (elemento > maiorNumero) {
            maiorNumero = elemento
        }
    }

    let menorNumero = maiorNumero

    for (let numero of arr) {
        const elemento = numero
        if (elemento < menorNumero) {
            menorNumero = elemento
        }
    }

    let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

    let diferenca = maiorNumero - menorNumero

    const objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    numeros = []
    for(let i = 0; numeros.length < n; i++){
        if(i % 2 === 0){
           numeros.push(i) 
        }
    }
    return numeros
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let lado1 = ladoA
    let lado2 = ladoB
    let lado3 = ladoC
    let triangulo

    if(lado1 === lado2 && lado1 === lado3) {
        triangulo = "Equilátero" 
    } else if(lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
        triangulo = "Escaleno"
    } else{
        triangulo = "Isósceles" 
    }

    return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let numeros = array
    segundoMaior = 0
    segundoMenor = 0
    let arr = []

    const compararNumeros = (a, b) => {
        return a - b
    }
    numeros.sort(compararNumeros)

    segundoMaior = numeros[numeros.length - 2]
    segundoMenor = numeros[1]

    arr = [segundoMaior, segundoMenor]
    return arr
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const addFilme = () => {
       const nome = String()
       const ano = Number()
       const diretor = String()
       const atores = []

    const filme = {
        nomeDoFilme: nome,
        anoDoFilme: ano,
        diretorDoFilme: diretor,
        atoresDoFilme: atores
    }

    return filme
   }

   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

   const nomePessoaAnonimado = {
       ...pessoa, nome: `ANÔNIMO`
   }

   return nomePessoaAnonimado
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const pessoasAutorizadas = () => {
        autorizadas = []
        for(const pessoa of pessoas){
            if(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5){
                autorizadas.push(pessoa)
            }
        }
        return autorizadas
   }

   return pessoasAutorizadas()
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = () => {
        naoAutorizadas = []
        for(const pessoa of pessoas){
            if(pessoa.idade < 15 || pessoa.idade > 60 || pessoa.altura < 1.5){
                naoAutorizadas.push(pessoa)
            }
        }
        return naoAutorizadas
   }

   return pessoasNaoAutorizadas()
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for(conta of contas){
        let saldoAtualizado = 0
        let compraTotal = 0
        compraTotal = conta.compras.reduce((compraTotal, elementoAtual) => compraTotal + elementoAtual)
        saldoAtualizado = conta.saldoTotal - compraTotal
        conta.saldoTotal = saldoAtualizado
        conta.compras = []
        return contas
    }
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let pessoa = []
    for(consulta of consultas){
        pessoa.push(consulta)
    }
    
    pessoa.sort((a,b) => {
        return a.nome.localeCompare(b.nome)
    })
    return pessoa
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    let pessoa = []

    function formataStringData(data) {
        let dia  = data.split("/")[0]
        let mes  = data.split("/")[1]
        let ano  = data.split("/")[2]
    
        return ano + '/' + ("0"+mes).slice(-2) + '/' + ("0"+dia).slice(-2)
    }

    for(consulta of consultas){
        consulta.dataDaConsulta = formataStringData(consulta.dataDaConsulta)
        pessoa.push(consulta)
    }

    pessoa.sort((a,b) => {
        return a.dataDaConsulta < b.dataDaConsulta ? -1 : a.dataDaConsulta > b.dataDaConsulta ? 1 : 0
    })

    function restauraStringData(data) {
        let dia  = data.split("/")[2]
        let mes  = data.split("/")[1]
        let ano  = data.split("/")[0]
    
        return  ("0"+dia).slice(-2)  + '/' + ("0"+mes).slice(-2) + '/' + ano
    }

    for(consulta of consultas){
        consulta.dataDaConsulta = restauraStringData(consulta.dataDaConsulta)
    }
    
    return pessoa
}