let juegos = ['Zelda', 'Mario', 'Minecraft', 'Sugar rush'];
console.log('Largo:', juegos.length, juegos);

let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1];

// console.log({ primero, ultimo});

// juegos.forEach((elemento, indice, arreglo) => {
//     console.log({elemento, indice, arreglo})
// });

console.log({ 'longitud': juegos.length, juegos })

let nuevaLongitud = juegos.push('Halo Infinite');
console.log({ nuevaLongitud, juegos })

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos })

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

let posicion = 1;
let juegosBorrados = juegos.splice(posicion, 2);
console.log(juegosBorrados);

let MinecraftIndex = juegos.indexOf('Minefraft');