export type Extrato = {
    clienteId: number,
    valor: number,
    data: string,
    descricao: string
}[]

export type Cliente = {
    id: number,
    nome: string,
    cpf: number,
    dataNascimento: string,
    saldo: number,
    extrato: Extrato
}[]

export const transacoes: Extrato = [
    {
        clienteId: 1,
        valor: 400,
        data: "08/06/2022",
        descricao: "Teclado"
    },
    {
        clienteId: 1,
        valor: 3.50,
        data: "07/06/2022",
        descricao: "Pipoca"
    }
]

export const clientes: Cliente = [
    {
        id: 1,
        nome: "Rommel",
        cpf: 99999999999,
        dataNascimento: "10/10/2000",
        saldo: 2000,
        extrato: transacoes
    }
]
