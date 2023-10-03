const express = require('express');
const router = express.Router();

// Importez le userController
const userController = require('../userController');

// Route pour supprimer un utilisateur
router.delete('/:username', (req, res) => {
  const username = req.params.username;
  const users = req.users; // Utilisez la variable partagée via le middleware

  // Recherchez l'utilisateur à supprimer
  const userIndex = users.findIndex((user) => user.username === username);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'Utilisateur non trouvé' });
  }

  // Supprimez l'utilisateur de la liste des utilisateurs
  users.splice(userIndex, 1);

  // Écrivez les données mises à jour dans le fichier users.json (si nécessaire)

  res.json({ success: true, message: 'Utilisateur supprimé avec succès' });
});

module.exports = router;
