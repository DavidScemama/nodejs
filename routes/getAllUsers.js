const express = require('express');
const router = express.Router();

// Route pour obtenir tous les utilisateurs avec un nom donné
router.get('/:username', (req, res) => {
  const username = req.params.username;
  const users = req.users;

  // Filtrer les utilisateurs avec le nom donné et exclure ceux avec un mauvais mot de passe
  const filteredUsers = users.filter((user) => user.username === username && user.password);

  res.json(filteredUsers);
});

module.exports = router;
