type Cliente = {
    id: number
    nome: string,
    cpf: number,
    dataNascimento: string,
    saldo: number,
    extrato: {}[]
}[]

export const clientes: Cliente = [
    {
        id: 1,
        nome: "Rommel",
        cpf: 99999999999,
        dataNascimento: "10/10/2000",
        saldo: 2.000,
        extrato: []
    }
]
