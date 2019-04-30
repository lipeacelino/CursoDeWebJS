let num = 2;
var num2 = 3;
num3 = 4;
const boolean  = num>num2
console.log(boolean)

console.log(num + " " + num2 + " " + num3)

"laços"

let q = 10
for (let i =0; i<q; i++) {
    console.log(i)
}

while (q > 0) {
    console.log(q)
    q--
}

"objetos"

obj = {}
obj.nome = "Felipe"
obj.idade = 20

obj2 = {
    nome: "kakaka",
    idade: 45
}
console.log(obj2.nome + " " + obj2.idade)

let {nome:n, idade:i} = obj
console.log(n, i)

"Função"
function soma(a,b) {
    console.log(a+b)
}

const sub = function (a,b) {
    console.log(a-b)
}

soma(2,3)
leble(10,5)