const express = require('express');
const router = express.Router();

module.exports = (users) => {
  router.delete('/:username', (req, res) => {
    const username = req.params.username;
    const userIndex = users.findIndex((user) => user.username === username);

    if (userIndex === -1) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    users.splice(userIndex, 1);
    res.json({ success: true, message: 'Utilisateur supprimé avec succès' });
  });
};

module.exports = router;