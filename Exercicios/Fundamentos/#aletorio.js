function soma (x=0,y=0) {
    return x+y
}
console.log(soma(4,5))
console.log(soma())

function hello() {
    return "Alô mundo!"
}
console.log(hello())

function alo() {
    console.log("alô mundo")
}
alo()

function idade(anoNasc, anoAtual) {
    return anoAtual - anoNasc
}

console.log(idade(1998, 2018))

let produto = {
    nome: 'faca',
    funcao: 'matar'
}

console.log(produto.funcao, produto.nome)

const telefone = function(){}
console.log(typeof telefone)

var obj = function(nome) {
    this.nome = nome
    this.exec = function(){
        return 'Valeuu'
    }
}
let mesa = new obj('mesa de aço')
console.log(mesa.exec())

const [min, max] = [["a","b","c"], ["d","e","f"]]
console.log(min[0], max[2])

//
const produto = {
    categoria: {
        nome:'Smartphone'
    },
    marca:'lg',
    qtd:5
}
const produto2 = {}
produto2.categoria = {}
produto2.categoria.nome = 'TV'
produto2.marca = 'Samsung'
console.log(produto2.categoria.nome + " " + produto2.marca, produto2.qtd)

//
const cliente = function(nome, idade) {
    this.nome = nome,
    this.idade = idade
}
c1 = new cliente('Felipe', 20);
console.log(c1.nome, c1.idade);
//