type Colaboradores = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}[]

enum SETOR {
    FINANCEIRO= 'financeiro',
    MARKETING = 'marketing',
    VENDAS = 'vendas'
}

const retornaColaborador = (colaboradores: Colaboradores) => {
    const pessoas = []
    let colaborador: {
        nome: string,
        salário: number,
        setor: string,
        presencial: boolean
    }

    for(colaborador of colaboradores){
        pessoas.push(colaborador)
    }

    const filtrarPessoas = pessoas.filter(pessoa => {
        return pessoa.presencial == true && pessoa.setor == SETOR.MARKETING
    })

    return filtrarPessoas
}

export default retornaColaborador