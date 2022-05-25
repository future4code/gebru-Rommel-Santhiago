/**
 * DNA - ATT GCT GCG CAT TAA CGA CGC GTA
 * Para se formar o RNA, devemos realizar a troca das bases nitrogenadas, 
 * seguindo a regra: 
 * A (adenina) vira U (uracila - específica do RNA); 
 * T (timina) vira Adenina (A), 
 * C (citosina) vira G(guanina); e 
 * G (guanina) vira C (citosina).  
 * O RNA transcrito a partir do exemplo de DNA acima é
 * RNA - UAA CGA CGC GUA AUU GCU GCG CAU
 */

const desafioDnaParaRna = (dna: string) => {
    let replacement: any = {
        A: 'U',
        T: 'A',
        C: 'G',
        G: 'C'
    }
    let rna =  dna.replace(/[ATCG]/g, function(c) {
        return replacement[c]
    })

    console.log('O DNA é:', dna, '\n')
    console.log('O RNA é:', rna, '\n')
}

export default desafioDnaParaRna