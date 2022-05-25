function desafioComparaDoisNumeros(num1: number, num2: number) {
    let maiorNumero;
    const sum = num1 + num2
    const sub = num1 - num2
    const mult = num1 * num2
    console.log(`Os números escolhidos foram:`, num1, num2)

    console.log(`A soma desses números é:`, sum)
    console.log(`A subtração desses números é:`, sub)
    console.log(`A multiplicação desses números é:`, mult)
    if (num1 > num2) {
      maiorNumero = num1;
    } else {
      maiorNumero = num2;
    }
  
    console.log(`O maior número é: `, maiorNumero, '\n') 
}

export default desafioComparaDoisNumeros