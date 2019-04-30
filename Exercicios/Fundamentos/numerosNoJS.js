const peso1 = 1.0
const peso2str = '2.0'
const peso2 = Number(peso2str) //casting

const nota1 = 7.9657987
const nota2 = 7.01654654

const total = nota1 * peso1 + nota2 * peso2
const media = total / (peso1 + peso2)

console.log(typeof peso2) //verifica o tipo da variável
console.log(Number.isInteger(peso2)) //verifica se é inteiro, retorna um boolean
console.log(typeof(peso2str))

console.log(media.toFixed(2)) //toFixed determina o número de casas decimais após o ponto

/* media.toString() e String(media) é basicamente a mesma coisa
 */


