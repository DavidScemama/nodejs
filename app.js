const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const userController = require('./userController'); // Importez le userController

// Middleware global pour partager la variable users avec les routes
app.use((req, res, next) => {
  req.users = userController.getUsers();
  next();
});

// Routes
app.use('/getUser', require('./routes/getUser'));
app.use('/postMessage', require('./routes/postMessage'));
app.use('/addUser', require('./routes/addUser'));
app.use('/getAllUsers', require('./routes/getAllUsers'));
app.use('/updateUser', require('./routes/updateUser'));
app.use('/deleteUser', require('./routes/deleteUser'));

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
