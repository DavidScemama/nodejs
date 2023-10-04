const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/', (req, res) => {
  const { username, email, password } = req.body;
  const users = req.users;

  // Pour valider les données
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
  }

  // Pour vérifier si l'utilisateur existe déjà
  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ error: 'Cet utilisateur existe déjà' });
  }

  // Pour ajouter l'utilisateur à la bdd
  users.push({ username, email, password });

// Écrire les données mises à jour dans users.json
  fs.writeFileSync('./bdd/users.json', JSON.stringify(users, null, 2));

  res.json({ success: true, message: 'Utilisateur ajouté avec succès' });
});

module.exports = router;
