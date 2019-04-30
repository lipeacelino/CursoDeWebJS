const escola = "Cod3r"
console.log(escola.charAt(4))

//é tipo um contains() em java e find/index em python
console.log(escola.indexOf(1))

//pegando valor do caractere na tabela asc
//console.log(escola.charCodeAt(3))

//basicamente a mesma coisa de charAt()
console.log(escola.substring(4))

//intervalo entre string é igual java
console.log(escola.substring(1,4))

//forma diferente de concatenar
console.log('Nome da escola' .concat(escola).concat(' huahua'))

//split é o café com leite
console.log('Zefinha,Zumira,Zuriema'.split(','))

let n = 'Pilões'
n = n.replace('õ','º')
console.log(n)

/* Observações:
 *literal é um valor que a gente armazena em um 
 *é bom estudar regex, expressões regulares */