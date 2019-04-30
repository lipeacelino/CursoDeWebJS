function rand([min = 0, max = 100]){
    if (min > max) {
        [min, max] = [max, min] //eu acho que o do lado direito é um array
                                //do lado esquerdo são variáveis que recebem os valores dos arrays 'min/max'
    }
    
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(rand([203, 200]))


function rand2(min = 0, max = 100){
    if (min > max) {
        [min, max] = [max, min] //eu acho que o do lado direito é um array
                                //do lado esquerdo são variáveis que recebem os valores dos arrays 'min/max'
    }
    
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(rand2(203, 200))