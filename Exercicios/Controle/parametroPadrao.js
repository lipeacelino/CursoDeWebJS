//estratégia 1 para gerar valor padrão
const soma1 = function(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}

//estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {

    a = a != undefined ? a:1;
    b = 1 in arguments ? b:1;
    c = isNaN(c) ? c : 1;

    return a+b+c
} 

//console.log(soma1(2,2,2), soma2(2,2,2))

//padrao es2015
function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(3,4,5))