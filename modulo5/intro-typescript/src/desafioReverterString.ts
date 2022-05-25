const desafioReverterString = (str: string) => {
    console.log(`String original: "${str}"`)
    const reverseString = str.split('').reverse().join('')

    console.log(`String revertida "${reverseString}" \n`)
}

export default desafioReverterString