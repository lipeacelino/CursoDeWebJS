function rand({max = 100, min = 1}) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

numeros = {
    min: 250,
    max: 300
}

console.log(rand(numeros))