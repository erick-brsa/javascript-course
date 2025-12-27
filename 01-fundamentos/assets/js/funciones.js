function saludar(nombre) {
    console.log('Hola' + nombre);
}
    
const saludar2 = function() {
    console.log('Hola Mundo!');
}    

function sumar(a,b) {
    return a + b;
}

console.log(sumar(1, 2))

const sumar2 = (a, b) => a + b;

console.log(sumar(1, 2))

function getAleatorio() {
    return Math.random();
} 

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2())