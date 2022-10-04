/**
 * # - Exercício 1
    
    Considere que a gente só possa fazer três operações com `string`: adicionar um caractere ao final dele, remover um caractere do final dele ou substituir um caractere por outro. Dizemos que uma `string` é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma `string` é  'one edit' de outra.

##  - Exemplos
    
    `"banan"` é 'one edit' de `"banana"` (remoção de um caracter)    
    `"bananak"` é 'one edit' de `"banana"` (adição de um caracter)
    `"panana"` é 'one edit' de `"banana"` (troca de um caracter)
    `"bananaaa"` **não** é 'one edit' de `"banana"` (adição de dois caracteres)
 */

function isOneEdit(stringA: string, stringB: string): boolean {
    // Se a diferença de tamanho entre as duas é maior que 1, não é oneEdit
    if (Math.abs(stringB.length - stringA.length) > 1) return false

    // Se uma é maior que a outra, a maior obrigatoriamente deve incluir a outra
    if (stringA.length > stringB.length) return stringA.includes(stringB)
    if (stringB.length > stringA.length) return stringB.includes(stringA)


    // Passando pelos ifs acima, significa que as duas têm o mesmo tamanho
    // Nesse caso, varremos as strings contando quantas letras diferentes tem
    let charsDiffCount = 0
    for (let i = 0; i < stringA.length; i++) {
        if (stringA[i] !== stringB[i]) charsDiffCount++
    }

    // Retorna true se a diferença é 1, false caso contrário
    return charsDiffCount === 1
}

console.log(isOneEdit("banan", "banana")) // true

console.log(isOneEdit("bananaaa", "banana")) // false