const obj = {
    nome: 'Felipe'
}

function tratarErroELancar(erro) {
    throw new Error("blá blá blá")
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch(e) {
        tratarErroELancar(e);
    }   
}

imprimirNomeGritado(obj)