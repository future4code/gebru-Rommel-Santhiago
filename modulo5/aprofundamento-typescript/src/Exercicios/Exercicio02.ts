function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

/**
 * a) 
 * As entradas são de Array de numeros e as saidas são de um objeto
 */

/**
 * b)
 * As demais variaveis são , numerosOrdenados do tipo array de numeros, soma do tipo numero, 
 * estatisticas do tipo objeto e maior, menor e media do tipo numero 
 */

// c)
type amostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => {}
}