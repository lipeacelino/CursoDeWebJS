let dobro = function(n) {
    return n*2
} 

dobro = (n) => {
   return n*2
}

dobro = (n) => n*2 //retorno implícito

exemplo = () => 'oi' //retorno implícito

exemplo = _ => 'oi' //essa sintaxe tbm é válida quando se quer fazer uma chamada sem argumento

console.log(`${dobro(Math.PI)} + ${exemplo()}`)