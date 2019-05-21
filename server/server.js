require('./config/config');

const express = require('express');
const app = express();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function (req, res) {
    //Se cambio el formaro a json para enviar este tipo de archivos
    res.json('get Usuario')
});

app.post('/usuario', function (req, res) {
    let body = req.body;
    //Se cambio el formaro a json para enviar este tipo de archivos
    if (body.nombre === undefined) {
        //Para regresar un estado si la variable esta indefinida
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {
        res.json({
            persona: body
        })

    }
});

app.put('/usuario/:id', function (req, res) {
    //Sirve para enlazar parametros
    let id = req.params.id;
    //Se cambio el formaro a json para enviar este tipo de archivos
    res.json({
        id
    })
});

app.delete('/usuario', function (req, res) {
    //Se cambio el formaro a json para enviar este tipo de archivos
    res.json('delete Usuario')
});

app.listen(process.env.PORT, () => {

    console.log('Escuchando el puerto: ', process.env.PORT);
});