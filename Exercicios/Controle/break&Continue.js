`o break não age em blocos
for/while/switch o continue interrompe a repetição atual
e pula para a próximo item`

const num = [1,2,3,4,5]

for (x in num) {
    if (x == 3) break //quando se tem apenas uma expressão apos o if pode colocar na mesma linha
    console.log(`${x} => ${num[x]}`)
}

console.log('\n')

for (y in num) {
    if (y == 3) continue
    console.log(`${y} => ${num[y]}`)
}

"obs: ver rótulos"