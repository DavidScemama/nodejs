const express = require('express');
const router = express.Router();

module.exports = (users) => {
  router.put('/:username', (req, res) => {
    const username = req.params.username;
    const { newUsername, newEmail } = req.body;

    if (!newUsername || !newEmail) {
      return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
    }

    const userToUpdate = users.find((user) => user.username === username);

    if (!userToUpdate) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    userToUpdate.username = newUsername;
    userToUpdate.email = newEmail;

    res.json({ success: true, message: 'Utilisateur mis à jour avec succès' });
  });
};

module.exports = router;