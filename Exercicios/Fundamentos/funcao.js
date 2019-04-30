//função sem retorno
function imprimirSoma(a, b) {
    console.log(a+b)
}
imprimirSoma(2,3)

//função com retorno
function imprimirSoma2(a,b) {
    return a+b
}
console.log(imprimirSoma2(2,3))

//é possível passar o valor do parâmetro direto na função
function imprimirSoma3(a=2, b=3) {
    return a+b
}
console.log(imprimirSoma3())