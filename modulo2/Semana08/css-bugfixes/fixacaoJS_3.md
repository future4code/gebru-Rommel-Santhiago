``` javascript
function calculaNota(ex, p1, p2) {
    const peso1 = 1
    const peso2 = 2
    const peso3 = 3
    let media = ((ex * peso1) + (p1 * peso2) + (p2 * peso3)) / 6

    if(media >= 9){
        // console.log("Nota A", media)
        return "A"
    }else if(media < 9 && media >= 7.5){
        // console.log("Nota B", media)
        return "B"
    }else if(media < 7.5 && media >= 6){
        // console.log("Nota C", media)
        return "C"
    }else if(media < 6){
        // console.log("Nota D", media)
        return "D"
    }
}
calculaNota(9, 9, 9)
calculaNota(8, 7, 8)
calculaNota(7, 6, 7)
calculaNota(5, 5, 5)
```