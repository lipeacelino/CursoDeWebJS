const pessoa = {
    saudacao: "Olá, bom dia!",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()