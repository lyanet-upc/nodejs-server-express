const hbs = require('hbs');

// Helpers: funciones que se ejecutan cuando el template lo requiere
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' '); // obtener un arreglo de palabras
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
})