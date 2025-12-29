const personaje =  {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        log: -118.7
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

console.log(personaje);
console.log('Nombre:', personaje.nombre)
console.log('Nombre:', personaje['nombre']);

// Más detalles
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Bloquear objeto
Object.freeze(personaje)