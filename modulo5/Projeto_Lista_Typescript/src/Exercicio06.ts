type Clientes = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}[]

const retornaAdmins = (clientes: Clientes) => {
    const pessoas = []
    let cliente: {
        cliente: string,
        saldoTotal: number,
        debitos: number[]
    }

    for(cliente of clientes){
        pessoas.push(cliente)
    }

    const filtrarClientes = pessoas.filter(pessoa => {
        let debitos = 0
        for(let i = 0; i < pessoa.debitos.length; i++){
            debitos += pessoa.debitos[i]
        }
        const saldoAtualizado = pessoa.saldoTotal - debitos
        pessoa.saldoTotal = saldoAtualizado
        pessoa.debitos = []
        if(saldoAtualizado < 0){
            return pessoa 
        }
    })

    return filtrarClientes
}

export default retornaAdmins