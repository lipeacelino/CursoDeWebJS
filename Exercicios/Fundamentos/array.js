const valores = [1,2,3,4,5]
console.log(valores[5]) //não dá erro só mostra que o valor não está definido

valores[9] = 10 //o array do js não tem tamanho fixo
                //se add um valor numa posição que não existe ele add normalmente
                //e tbm add espaços vazios
valores.push(11,12,13)
console.log(valores)
valores.pop()
console.log(valores)
delete valores[0]
console.log(valores)