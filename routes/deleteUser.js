const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Chemin complet vers le fichier users.json
const usersFilePath = path.join(__dirname, '..', 'bdd', 'users.json');

router.delete('/:username', (req, res) => {
  const username = req.params.username;
  const users = req.users;

  const userIndex = users.findIndex((user) => user.username === username);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'Utilisateur non trouvé' });
  }

  // Pour supprimer  l'utilisateur de la liste des utilisateurs
  users.splice(userIndex, 1);

  // Pour écrire les données mises à jour dans  users.json
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2)); 

  res.json({ success: true, message: 'Utilisateur supprimé avec succès' });
});

module.exports = router;
