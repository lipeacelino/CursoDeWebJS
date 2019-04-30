const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Acelino',
    idade: 20,
    sexo: 'M'
}

for (atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}