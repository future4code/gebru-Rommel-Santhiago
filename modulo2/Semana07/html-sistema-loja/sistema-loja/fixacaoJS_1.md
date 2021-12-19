``` javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  // Escreva seu código aqui
    let salario = 2000
    let comissao = (qtdeCarrosVendidos * 100) + ((valorTotalVendas * 5) / 100)
    let salarioTotal = salario + comissao

    return salarioTotal
}
```