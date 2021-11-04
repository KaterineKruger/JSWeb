console.log('a = ', a)
var a = 2
console.log('a = ', a)

/* ---> Mesmo código:

var a
console.log('a = ', a)
a = 2
console.log('a = ', a)

*/

// Hoisting apenas acontece com *var*

console.log('b = ', b)
let b = 2
console.log('b = ', b)
// ERRO!