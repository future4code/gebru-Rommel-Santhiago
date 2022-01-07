``` javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  const numero = arrayDeNumeros.filter((item) => {
    return item == numeroEscolhido
  })
  if(numero.length > 0){
    return "O número " +  numeroEscolhido + " aparece " + numero.length + "x"
  }else {
    return "Número não encontrado"
  }  
}
```