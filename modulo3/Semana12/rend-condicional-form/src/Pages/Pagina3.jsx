import React from 'react'
import PerguntaAberta from './PerguntaAberta'
import PerguntaFechada from './PerguntaFechada'

export default class Pagina3 extends React.Component {
    render() {
        return (
            <>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <PerguntaAberta
                pergunta={"5. Por que você não terminou um curso de graduação?"}
                />
                <PerguntaFechada
                pergunta={"6. Você fez algum curso complementar?"}
                opcoes={[
                    "Nenhum", 
                    "Curso técnico", 
                    "Curso de inglês"
                ]}
                />
            </>
        )
    }
}