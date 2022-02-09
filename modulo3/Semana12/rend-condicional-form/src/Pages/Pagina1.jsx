import React from 'react'
import PerguntaAberta from './PerguntaAberta'
import PerguntaFechada from './PerguntaFechada'

export default class Pagina1 extends React.Component {
    render() {
        return (
            <>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual sua idade?"} />
                <PerguntaAberta pergunta={"3. Qual seu email?"} />
                <PerguntaFechada
                pergunta={"4. Qual a sua escolaridade?"}
                opcoes={[
                    "Ensino médio incompleto",
                    "Ensino médio completo",
                    "Ensino superior incompleto",
                    "Ensino superior completo"
                ]}
                />
            </>
        )
    }
}