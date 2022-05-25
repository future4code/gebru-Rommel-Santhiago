import checaTriangulo from './checaTriangulo'
import coresFavoritas from './imprimeTresCoresFavoritas'
import checaAnoBissexto from './checaAnoBissexto'
import comparaDoisNumeros from './comparaDoisNumeros'

const Exercicios = () => {
  // Exercicio 01
  console.log(checaTriangulo(10, 5, 5))

  // Exercicio 02
  coresFavoritas("Azul", "Branco", "Verde")

  // Exercicio 03
  checaAnoBissexto(2016)
  checaAnoBissexto(2015)

  // Exercicio 04
  comparaDoisNumeros(50, 10)
}

Exercicios()