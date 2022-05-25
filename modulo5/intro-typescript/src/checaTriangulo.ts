function checaTriangulo(a: number, b: number, c: number): string {
    console.log(`Os lados do triangulo são: `, a, b, c)
    
    if(a !== b && b !== c) {
      return "Tipo do triangulo: Escaleno \n";
    } else if (a === b && b === c) {
      return "Tipo do triangulo: Equilátero \n";
    } else {
      return "Tipo do triangulo: Isósceles \n";
    }
}

export default checaTriangulo