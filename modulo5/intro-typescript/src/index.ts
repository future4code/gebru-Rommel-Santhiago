import checaTriangulo from './checaTriangulo'
import coresFavoritas from './imprimeTresCoresFavoritas'
import checaAnoBissexto from './checaAnoBissexto'
import comparaDoisNumeros from './comparaDoisNumeros'
import checaRenovacaoRG from './checaRenovacaoRG'

import desafioComparaDoisNumeros from './desafioComparaDoisNumeros'
import desafioDnaParaRna from './desafioDnaParaRna'
import desafioReverterString from './desafioReverterString'
import desafioValidaInscricao from './desafioValidaInscricao'

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

  // Exercicio 05
  checaRenovacaoRG(2022, 2004, 2020)
  checaRenovacaoRG(2022, 2004, 2014)
  checaRenovacaoRG(2022, 2000, 2015)
  checaRenovacaoRG(2022, 2000, 2010)
  checaRenovacaoRG(2022, 1960, 2010)
  checaRenovacaoRG(2022, 1960, 2007)
}

Exercicios()

const Desafios = () => {
  // Exercicio 06
  desafioComparaDoisNumeros(5, 10)

  // Exercicio 07
  desafioDnaParaRna("ATT GCT GCG CAT TAA CGA CGC GTA")

  // Exercicio 08
  desafioReverterString("SOL")

  // Exercicio 09
  desafioValidaInscricao(19, "completo", 35)
  desafioValidaInscricao(19, "completo", 44)
}

Desafios()