const notas = [1,2.3,3.5,4,3,3.4,5,34,10,7,6]

for (let i in notas) {
    //console.log(i) diferente do python dessa forma ele acessa apenas o índice e não o atributo
    console.log(`Nota: ${notas[i]}`)
}

//nesse outro caso para percorrer um objeto o for in funciona de forma parecidda com o python
const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Acelino',
    idade: 20,
    sexo: 'M'
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}