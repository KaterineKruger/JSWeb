const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // Destructuring array
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 1, 2], [9, 6, 8]] // Destructuring array
console.log(nota)