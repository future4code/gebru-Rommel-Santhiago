export function retornaArrayOrdenado(array1, array2) {
    const compararNumeros = (a, b) => {
      return a - b
    }
    
    if(array1.sort(compararNumeros).toString() === array2.toString()){
        return true
    } else {
        return false
    }
}