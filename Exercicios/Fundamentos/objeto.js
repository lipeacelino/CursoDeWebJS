{//um par de chaves significa que é um objeto
const prod1 = {}
prod1.nome = 'TV'
prod1.preco = '999.99'
prod1.desconto = {}
prod1.desconto.valor = 0.40
console.log(prod1.desconto)
}


const prod2 = {
    nome: 'DVD',
    preco: 69.90,
    categoria: {
        nomeCateg: 'Eletrodomésticos'
        //pode ter vários objetos aninhados
    }
}
console.log(prod2.categoria.nomeCateg)
console.log(typeof prod2.preco)
console.log(prod2.nome)
