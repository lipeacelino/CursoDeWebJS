const a = "1"
const b = 1

console.log("Caso 1 | a = b?", a == b) //vai retornar true pq == é uma comparação sem levar em consideração os tipos
console.log("Caso 2 | a = b?", a === b) //vai dar false pq === é uma comparação que leva em consideração os tipos
console.log("")
console.log("Caso 1 | a >= b?", a != b ) //True
console.log("Caso 2 | a >= b?", a !== b) //false 

/**
 * os comparadores >= e <= são padrões e comparam valo res ignorando os tipos
 */