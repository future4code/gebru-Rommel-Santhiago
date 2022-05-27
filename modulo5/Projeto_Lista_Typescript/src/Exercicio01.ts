import { Color } from './colors'

const identificarPessoa = (nome: string, dataNascimento: string) => {

    const data = dataNascimento.split("/")
    const dia = data[0]
    const mes = Number(data[1])
    const ano = data[2]

    const meses = [
        "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
        "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
    ]

    let nomeDoMes = meses[mes -1]

    return `${Color.cyan}Olá me chamo ${Color.red}${nome}${Color.cyan}, nasci no dia ${Color.red}${dia}${Color.cyan} do mês de ${Color.red}${nomeDoMes}${Color.cyan} do ano de ${Color.red}${ano}${Color.reset}`
}

export default identificarPessoa