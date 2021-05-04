//  ENCABEZADO PARA UNA API EN NODE JS
    var express = require('express');
    var bodyParser = require('body-parser');
    var app = express();
    const cors = require('cors');
    const aws_keys = require('./creds');

    var corsOptions = { origin: true, optionsSuccessStatus: 200 };

    app.use(cors(corsOptions));
    app.use(bodyParser.json(
        {   limit: '10mb', 
            extended: true 
        }
        ));
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
    var port = 9000;
    app.listen(port);
    console.log('Listening on port', port);
//  ENCABEZADO PARA UNA API EN NODE JS

var prueba = "hola mundo"

// ========================
// res => peticion de get
// req =? peticion de post
// ========================

// PETICIONES, CHECKPOINT, DEFINICIONES, ENDPOINT
app.get('/inicio', (req, res) => {
    res.json(prueba)
  })

app.post('/saludar', (req, res) => {
    let body = req.body
    let nombre = body.nombre1

    console.log("Hola: " + nombre)

    
  })

// el servidor se levanta con => node index.js
