import Exercicio01 from './Exercicio01'
import Exercicio02 from './Exercicio02'
import Exercicio03 from './Exercicio03'
import Exercicio04 from './Exercicio04'

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
    
    console.log(Exercicio04(
            [
                { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
                { nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
                { nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
                { nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
                { nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
                { nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
                { nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
            ]
        )
    )
}

Exercicios()