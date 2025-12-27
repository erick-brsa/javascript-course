function crearPersona(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}

const persona = crearPersona('Erick', 'Briones');
console.log(persona);

const crearPersona2 = (nombre, apellido) => ({
    nombre,
    apellido
});

const persona2 = crearPersona('Erick', 'Briones');
console.log(persona2);


function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
    // console.log({ edad, args });
    return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(21, false, true, 'Erick');
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona('Ariel', 'Briones');

const imprimePropiedades = ({ nombre = '', codeName = '', vivo = '' }) => {
    console.log(nombre);
    console.log(codeName);
    console.log(vivo);
}