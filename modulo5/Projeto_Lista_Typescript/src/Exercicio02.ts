import { Color } from './colors'

const tipoDaVariavel = (tipo: any) => {
    return `${Color.green}O tipo da variavel ${tipo} é: ${Color.red} ${typeof(tipo)} ${Color.green}`
}

export default tipoDaVariavel