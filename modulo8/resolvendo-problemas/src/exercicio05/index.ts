/**
 * - Exercício 5
    
    [Amazon] Considere que você tenha uma matriz de números cujas linhas e colunas estejam ordenadas da menor para a maior. Determine a quantidade de números negativos que há dentro da matriz.

    A seguinte matriz está ordenada (em relação às linhas e as colunas). A quantidade de números negativos é 4
    ```tsx
        [
            [-3, -2, -1, 1],
            [-2, 2, 3, 4],
            [4, 5, 7, 8]
        ]
    ```
 */

    const findNegativeNumbersInMatrix = (m: number[][]): number => {
        let count = 0;
        let row = 0;
        let column = m[0].length - 1;
        while (row < m.length && column >= 0) {
            if (m[row][column] < 0) {
                count += column + 1;
                row++;
            } else {
                column--;
            }
        }
        return count;
    };

    console.log(findNegativeNumbersInMatrix([[-3, -2, -1, 1], [-2, 2, 3, 4], [4, 5, 7, 8]])) // 4

    console.log(findNegativeNumbersInMatrix([[-3, -2, -1, 1], [-2, -2, 3, 4], [-4, 5, 7, 8]])) // 6