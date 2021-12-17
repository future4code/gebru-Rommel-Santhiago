``` javascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let macas

  if(quantidade < 12){
      macas = 1.30
  } else {
      macas = 1
  }

  let precoTotal = quantidade * macas

  return precoTotal
}
```