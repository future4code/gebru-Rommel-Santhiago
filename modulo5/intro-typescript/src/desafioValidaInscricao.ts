const desafioValidaInscricao = (idade: number, escolaridade: string, disponibilidade: number) => {
    if(idade >= 18 && escolaridade === "completo" && disponibilidade >= 40){
        console.log('A inscrição é valida, parabens :) \n')
    } else {
        console.log('Desculpe :( , a inscrição não foi validada \n')
    }
}

export default desafioValidaInscricao