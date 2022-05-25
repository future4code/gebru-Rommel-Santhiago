function comparaDoisNumeros(num1: number, num2: number) {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    console.log(`A diferença entre ${num1} e ${num2} é: `, diferenca, '\n') 
}

export default comparaDoisNumeros