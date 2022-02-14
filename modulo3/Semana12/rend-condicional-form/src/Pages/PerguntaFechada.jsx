import React from "react"

export default class PerguntaFechada extends React.Component {
  render() {
    const escolherOpcao = () => {
      return <select>
        {this.props.opcoes.map(opcao => (
              <option value={opcao} key={opcao}>{opcao}</option>
            ))}
      </select>
    }
    return (
      <div>
        <p>{this.pergunta}</p>
        {escolherOpcao()}
      </div>
    )
  }
}