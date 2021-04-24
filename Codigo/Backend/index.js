var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const cors = require('cors');

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

// PETICIONES, CHECKPOINT, DEFINICIONES
app.get('/inicio', (req, res) => {
  })


// el servidor se levanta con => node index.js
