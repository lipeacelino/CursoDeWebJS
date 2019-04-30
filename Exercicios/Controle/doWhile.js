function getNumeroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let numero = 0
do {
  numero = getNumeroAleatorio(1,10)
  console.log(`Número gerado: ${numero}`)
} while (numero != 5)