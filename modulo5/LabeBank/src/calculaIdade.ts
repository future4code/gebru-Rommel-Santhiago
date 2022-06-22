export const idade = (dataNasc: string): number => {

    let anoAtual: number = new Date().getFullYear();
    let mesAtual: number = new Date().getMonth() + 1;
    let diaNasc: number = +dataNasc.split("/")[0];
    let mesNasc: number = +dataNasc.split("/")[1];
    let anoNasc: number = +dataNasc.split("/")[2];
    let idade: number = anoAtual - anoNasc;

    if (mesAtual < mesNasc) {
        idade--;
    } else {
        if (mesAtual == mesNasc) {
            if (new Date().getDate() < diaNasc) {
                idade--;
            };
        };
    };

    return idade;
};