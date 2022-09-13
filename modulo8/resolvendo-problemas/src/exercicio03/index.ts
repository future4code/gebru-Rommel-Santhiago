/**
 * - Exercício 3
    
    Uma Matriz é uma estrutura bidimensional que pode possuir elementos em linhas e colunas. Como mostrado abaixo:
        ```tsx
            1 2 3
            4 5 6
            7 8 9
        ```
    
    Nesse caso, o elemento da linha 3 e coluna 2 é o 8; o elemento da linha 2 e coluna 3 é o 6 e assim por diante. Sobre isso, responda as perguntas abaixo:
    
    a. Como podemos representar uma Matriz em Typescript?
    Podemos representar como um array de arrays de número. O exemplo dado poderia ser representado como:
        ```tsx
            [[1, 2, 3], 
            [4,5,6],
            [7,8,9]]
        ```

        Simplificando:
        ```tsx
            [[1,2,3],[4,5,6],[7,8,9]]
        ```
    
    b. Escreva uma função que receba uma Matriz, o índice da linha, o índice da coluna e um valor. Essa função deve alterar o elemento das linha e coluna em questão pelo valor passado. (Caso não tenha nenhum valor nos índices passados, retorne um erro: `Fora do intervalo da matriz`)
 */

const replaceMatrixValue = (
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    value: number
): number[][] => {
    if (
        matrix[rowIndex] === undefined ||
        matrix[rowIndex][columnIndex] === undefined
    ) {
        throw new Error("Fora do intervalo da matriz");
    }

    matrix[rowIndex][columnIndex] = value;

    return matrix
};

console.log(replaceMatrixValue([[1,2,3],[4,5,6],[7,8,9]], 0, 1, 8)) 
                    // matrix = [[1,8,3],[4,5,6],[7,8,9]]

console.log(replaceMatrixValue([[1,2,3],[4,5,6],[7,8,9]], 2, 2, 1)) 
                    // matrix = [[1,2,3],[4,5,6],[7,8,1]]