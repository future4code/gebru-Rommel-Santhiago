import React from 'react'
import PerguntaAberta from './PerguntaAberta'

export default class Pagina2 extends React.Component {
    render() {
        return (
            <>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <PerguntaAberta pergunta={"5. Qual curso?"} />
                <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
            </>
        )
    }
}