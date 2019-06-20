const pessoa = {
    saudacao:'olá',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
/* ------------------ */
const falar = pessoa.falar
falar() //conflito de paradigmas: oo e funcional

const falarDePessoa = pessoa.falar.bind(pessoa) //esse conflito pode ser resolvido com o bind
falarDePessoa()