function checaAnoBissexto(ano: number) {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    if(cond1 || cond2) {
        console.log(`O ano de ${ano} é bissexto \n`)
    } else {
        console.log(`O ano de ${ano}, não é bissexto \n`)
    }
}

export default checaAnoBissexto