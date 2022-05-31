export function retornaIniciaisMaiusculas(frase){
    return (
        frase.toLowerCase().replace(/(?:^|\s)\S/g, 
            function(char) {
                return char.toUpperCase();
            }
        )
    );
}