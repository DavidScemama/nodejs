const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let users = [];

// Route pour obtenir un utilisateur par nom
app.use('/getUser', require('./routes/getUser'));

// Route pour poster un message
app.use('/postMessage', require('./routes/postMessage'));

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
  });