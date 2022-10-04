/**
 * # - Exercício 4
    
    Agora, vamos implementar algumas operações envolvendo matrizes. Para isso, estamos indicando algumas referências que podem ajudá-los a entender como essas operações são feitas "no papel".
 */

    let matrixA = [[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]
    let matrixB = [[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]

// a) Implemente uma função que receba uma matriz e imprima, no console, todos os seus elementos

    const printMatrix = (m: number[][]): void => {
        for (const row of m) {
            for (const element of row) {
                console.log(element);
            }
        }
    };

    printMatrix(matrixA); // 1 2 3 4 5 6 7 8 9

// b) Implemente uma função que receba duas matrizes e devolva a soma delas [Adição e subtração de Matrizes - Matemática](https://www.infoescola.com/matematica/adicao-e-subtracao-de-matrizes/)

    const sumMatrix = (
        matrixA: number[][],
        matrixB: number[][]
    ): number[][] => {
        const newMatrix: number[][] = [];
        if (
        matrixA.length !== matrixB.length ||
        matrixA[0].length !== matrixB[0].length
        ) {
        throw new Error("As dimensões das matrizes devem ser iguais");
        }
        const rowSize = matrixA[0].length;
        const columnSize = matrixB[0].length;
    
        for (let i = 0; i < rowSize; i++) {
        let newMatrixRow = [];
        for (let j = 0; j < columnSize; j++) {
            newMatrixRow.push(matrixA[i][j] + matrixB[i][j]);
        }
        newMatrix.push(newMatrixRow);
        }
        return newMatrix;
    };

    console.log(sumMatrix(matrixA, matrixB)); // [[2, 4, 6], [8, 10, 12], [14, 16, 18]]

// c) Implemente uma função que receba uma matriz e devolva a sua matriz transposta [Transposição de Matrizes - Matemática](https://www.infoescola.com/matematica/transposicao-de-matrizes/)    

    const transposeMatrix = (m: number[][]): number[][] => {
        const transposed: number[][] = [];
        if (!m.length) {
        throw new Error("Matriz inválida");
        }
        for (let j = 0; j < m[0].length; j++) {
        let row = [];
        for (let i = 0; i < m.length; i++) {
            row.push(m[i][j]);
        }
        transposed.push(row);
        }
        return transposed;
    };

    console.log(transposeMatrix(matrixA)); // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

// d) Implemente uma função que receba duas matrizes e devolva a multiplicação delas [Multiplicação de matrizes](https://www.somatematica.com.br/emedio/matrizes/matrizes4.php)

    const multiplyMatrix = (
        matrixA: number[][],
        matrixB: number[][]
    ): number[][] => {
        const result: number[][] = [];
        if (matrixA[0].length !== matrixB.length) {
            throw new Error("Matrizes inválidas");
        }
        for (let i = 0; i < matrixA.length; i++) {
            let rowResult: number[] = [];
            for (let j = 0; j < matrixB[0].length; j++) {
                let sumResult = 0;
                for (let k = 0; k < matrixA[0].length; k++) {
                    sumResult += matrixA[i][k] * matrixB[k][j];
                }
                rowResult.push(sumResult);
            }
            result.push(rowResult);
        }
        return result;
    };

    console.log(multiplyMatrix(matrixA, matrixB)); // [[30, 36, 42], [66, 81, 96], [102, 126, 150]]