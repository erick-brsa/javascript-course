/* Impresión de mensajes */
console.log('Hola mundo');

/* Variables */

// number
let a = 10;
let b = 20;
let x = a + b, y = a - b;

console.log('%c Mis variables', 'color: magenta; font-weight: bold;');
console.log({ a });
console.log({ b });
console.log(`x = ${x}, y = ${y}`);
console.table({a, b, x, y});

// string
let firstName = 'erick';
let lastname = 'briones';

console.log(firstName, lastname);
