const express = require('express');
const router = express.Router();
const fs = require('fs');

// Route pour mettre à jour les informations d'un utilisateur
router.put('/:username', (req, res) => {
  const username = req.params.username;
  const { newUsername, newEmail } = req.body;
  const users = req.users;

  // Pour valider les données
  if (!newUsername || !newEmail) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
  }

  const userToUpdate = users.find((user) => user.username === username);

  if (!userToUpdate) {
    return res.status(404).json({ error: 'Utilisateur non trouvé' });
  }

  // Mettre à jour les informations de l'utilisateur
  userToUpdate.username = newUsername;
  userToUpdate.email = newEmail;

  // Écrire les données mises à jour dans users.json
  fs.writeFileSync('./bdd/users.json', JSON.stringify(users, null, 2));

  res.json({ success: true, message: 'Utilisateur mis à jour avec succès' });
});

module.exports = router;
