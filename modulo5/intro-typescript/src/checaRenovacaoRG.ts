function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number) {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
        console.log(`Você tem ${idade} anos, sua carteira vence de 5 em 5 anos`)
        tempoCarteira >= 5 
        ? console.log(`O tempo da sua carteira é: ${tempoCarteira} anos\n Passou dos 5 anos precisa renovar\n`) 
        : console.log(`O tempo da sua carteira é: ${tempoCarteira} anos, ainda não passou os 5 anos\n`)
       
      }else if(idade >= 20 && idade <= 50) {
        console.log(`Você tem ${idade} anos, sua carteira vence de 10 em 10 anos`)
        tempoCarteira >= 10 
        ? console.log(`O tempo da sua carteira é: ${tempoCarteira} anos\n Passou dos 10 anos precisa renovar\n`) 
        : console.log(`O tempo da sua carteira é: ${tempoCarteira} anos, ainda não passou os 10 anos\n`)
       
      }else if(idade > 50) {
        console.log(`Você tem ${idade} anos, sua carteira vence de 15 em 15 anos`)
        tempoCarteira >=15 
        ? console.log(`O tempo da sua carteira é: ${tempoCarteira} anos\n Passou dos 15 anos precisa renovar\n`) 
        : console.log(`O tempo da sua carteira é: ${tempoCarteira} anos, ainda não passou os 15 anos\n`)
       
       }else {
           console.log('erro')
       }
}

export default checaRenovacaoRG   