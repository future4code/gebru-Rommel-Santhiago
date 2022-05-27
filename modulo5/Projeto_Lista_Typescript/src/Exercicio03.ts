type Filme = {
    nome: string,
    anoLancamento: number,
    genero: string,
    pontuacao?: number
}

const filmesCriados = (nome: string, anoLancamento: number, genero: string, pontuacao?: number) => {
    let filme: Filme = {
        nome,
        anoLancamento,
        genero,
        pontuacao
    }

    return filme
}

export default filmesCriados