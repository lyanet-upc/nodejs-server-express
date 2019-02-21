const http = require('http');

// creating server
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' }); // 200: status code (correcto)
        let salida = {
                nombre: 'Leidy',
                edad: 34,
                url: req.url
            } // sintaxis compleja
        res.write(JSON.stringify(salida))
        res.end();
    })
    .listen(8080);

console.log('Listening the port 8080');

// To connect >>> http://localhost:8080/

/* // creating server
http.createServer((req, res) => {
        res.write('Hola Mundo');
        res.end();
    })
    .listen(8080);

console.log('Listening the port 8080'); */


// creación  del servidor

// res.writeHead(200, { 'Content-Type': 'application/json' })

// let salida = {
//     nombre: 'Leidy',
//     edad: 35,
//     url: req.url
// };
// res.write(salida);