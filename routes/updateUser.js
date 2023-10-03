const express = require('express');
const router = express.Router();

// Importez le userController
const userController = require('../userController');

// Route pour mettre à jour les informations d'un utilisateur
router.put('/:username', (req, res) => {
  const username = req.params.username;
  const { newUsername, newEmail } = req.body;
  const users = req.users; // Utilisez la variable partagée via le middleware

  // Recherchez l'utilisateur à mettre à jour
  const userToUpdate = users.find((user) => user.username === username);

  if (!userToUpdate) {
    return res.status(404).json({ error: 'Utilisateur non trouvé' });
  }

  // Mettez à jour les informations de l'utilisateur
  userToUpdate.username = newUsername;
  userToUpdate.email = newEmail;

  // Écrivez les données mises à jour dans le fichier users.json (si nécessaire)

  res.json({ success: true, message: 'Utilisateur mis à jour avec succès' });
});

module.exports = router;
