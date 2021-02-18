const sum = require('./sum')

console.assert(typeof sum === 'function',
    'sum deve ser uma função'
)

console.assert(
    sum(1, 2) === 3,
    'Deve retornar 3'
)

console.assert(
    sum(2, 3) === 5,
    'Deve retornar 5'
)