const express = require('express')
const app = express()

// ================================================================
// Fourth Test
// ================================================================
const hbs = require('hbs');
// Helpers
require('./hbs/helpers');

const port = process.env.PORT || 3000; // variable de entorno global
// middleware --> incorpora archivo html en public
app.use(express.static(__dirname + '/public'))

// Express HBS engine
// Partials
hbs.registerPartials(__dirname + '/views/partials') // indica el directorio que va a contener los parciales
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // configuración de una solicitud get cuando el path sea un "/"
    // '/' permite filtrar servicios
    // http://localhost:3000

    // render: renderiza el archivo home.hbs
    res.render('home', {
        nombre: 'leidy yAnET serna', // Permite cambiar el nombre y el año de forma dinámica.
    })
})

app.get('/about', (req, res) => {
    // configuración de una solicitud get cuando el path sea un "/about"
    // http://localhost:3000/about
    res.render('about')
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port}`);
})


// ================================================================
// Third Test
// ================================================================

/*const hbs = require('hbs');

// middleware --> incorpora archivo html en public
app.use(express.static(__dirname + '/public'))

// Express HBS
hbs.registerPartials(__dirname + '/views/partials') // indica el directorio que va a contener los parciales
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    // configuración de una solicitud get cuando el path sea un "/"
    // '/' permite filtrar servicios
    // http://localhost:3000

    // render: renderiza el archivo home.hbs
    res.render('home', {
        nombre: 'Leidy', // Permite cambiar el nombre y el año de forma dinámica.
        anio: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {
    // configuración de una solicitud get cuando el path sea un "/"
    // '/' permite filtrar servicios
    // http://localhost:3000

    // render: renderiza el archivo home.hbs
    res.render('about', {
        anio: new Date().getFullYear()
    })
}) */


// ================================================================
// Second Test
// ================================================================
// middleware --> incorpora archivo html en public
/* app.use(express.static(__dirname + '/public')) // middleware: es una instrucción o un callback que se va a ejecutar siempre no importa la url que la persona pida
    // dominio público >>> en este carpeta pública se puede servir cualquier cantidad y tipo de archivos
    // siempre lee en primera instancia el archivo index.html
 */

// ================================================================
// se comenta para no crear confusión con app.use
// First Test
// ================================================================
/* app.get('/', (req, res) => {
    // configuración de una solicitud get cuando el path sea un "/"
    // '/' permite filtrar servicios
    // http://localhost:3000
    let salida = {
        nombre: 'Leidy',
        edad: 34,
        url: req.url
    }
    res.send(salida) // A diferencia del caso anterior detecta automáticamente el formato json
})

app.get('/data', (req, res) => {
    // http://localhost:3000/data
    res.send('Hola data') // A diferencia del caso anterior detecta automáticamente el formato json
}) */