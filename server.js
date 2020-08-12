const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3333;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

// app.get('/', function(req, res) {
//     //res.send('Hola Mundo') 
//     let salida = {
//         nombre: 'Bessy',
//         edad: '22',
//         url: req.url
//     }
//     res.send(salida)
// })

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'BeSSy VelásQuez'
    });
});

app.get('/about', function(req, res) {
    res.render('about');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}.`);
})