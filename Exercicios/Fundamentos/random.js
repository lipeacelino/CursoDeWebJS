function getNumeroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(getNumeroAleatorio(1,10))