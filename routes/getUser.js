const express = require('express');
const router = express.Router();

// Route pour obtenir un utilisateur par son nom d'utilisateur
router.get('/:username', (req, res) => {
  const username = req.params.username;
  const users = req.users;

// Recherchez l'utilisateur dans la liste des utilisateurs
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(404).json({ error: 'Utilisateur non trouvé' });
  }

  res.json(user);
});

module.exports = router;
