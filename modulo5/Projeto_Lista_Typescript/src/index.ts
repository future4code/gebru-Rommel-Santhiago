import Exercicio01 from './Exercicio01'
import Exercicio02 from './Exercicio02'
import Exercicio03 from './Exercicio03'

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const Exercicios = () => {
    console.log(Exercicio01('Rommel', '12/12/1987'))
    console.log(Exercicio01('Saullo', '12/01/2012'))

    console.log(Exercicio02(1))
    console.log(Exercicio02('1'))
    console.log(Exercicio02(true))
    console.log(Exercicio02([1, 2]))
    console.log(Exercicio02({1: 1}))

    console.log(Exercicio03("Duna", 2021, GENERO.ACAO, 74))   
    console.log(Exercicio03("Duna", 2021, GENERO.ACAO))
}

Exercicios()