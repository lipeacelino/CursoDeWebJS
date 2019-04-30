//atribuindo função a uma variável
const imprimirSoma = function(a,b) {
    console.log(a+b)
}
imprimirSoma(4,4)

//armazenando uma função arrow em uma variável
const soma = (a,b) => {
    console.log(a+b)
}

/* ainda sobre arrow..
 * retorno implícito */
const subtracao = (a,b) => a-b
console.log(subtracao(3,5))

//quando se tem só um parâmetro não precisa botar parênteses
const Cumprimento = a => console.log(a)
Cumprimento("Olá!")