//é uma forma de extrair objetos de uma estrutura
//pode ser usado para extrair de um array ou de objetos

const pessoa = {
    nome: 'Felipe',
    idade: 20,
    endereco: {
        rua: 'Luís Greg. da Silva',
        num: 38
    }
}

const {nome, idade} = pessoa //ao fazer isso ele cria duas variáveis com o nome das variáveis que
                            //estão dentro do objeto
const {nome:n, idade:i} = pessoa //outra de fazer é isso é atribuindo um nome diferente as variáveis
console.log(n, i)

const {endereco: {rua, num}} = pessoa
console.log(rua, num)