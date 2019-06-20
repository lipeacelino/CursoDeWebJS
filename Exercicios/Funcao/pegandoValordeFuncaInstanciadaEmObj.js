const casa = {
    num: 10,
    imprimeNum() {
        console.log(this.num)
    }
}

let numDaCasa = casa.imprimeNum() //numDaCasa recebe o VALOR/RETORNO da vunção impremeNum()
numDaCasa

numDaCasa = casa.imprimeNum.bind(casa) //numDaCasa recebe uma CÓPIA da função impremeNum()
numDaCasa()