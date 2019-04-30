
const lista = []
for (i=0; i<10; i++) {
    lista.push(function() {
        console.log(i)
    })
}

lista[0]() //doidera a saída é tudo 10
lista[1]() // kkkkkkkk