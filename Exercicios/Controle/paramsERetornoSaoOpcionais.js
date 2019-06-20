function area(largura, altura) {

    const area = largura * altura
    //isso não me parece ser uma boa prática! É só pra mostrar que isso é válido.
    if (area > 20) {
        console.log(`valor acima do permitido ${area}`)
    } else {
        return area
    }

}

console.log(area())