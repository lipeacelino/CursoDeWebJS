function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(3.3, 5.5, 'teste'))

"arguments é um array que coleta os argumentos passados como parâmetros haha :P"