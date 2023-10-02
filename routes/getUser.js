const express = require('express');
const router = express.Router();
const fs = require('fs');


let users = [];

router.get('/:username', (req, res) => {
  const username = req.params.username;
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(404).json({ error: 'Utilisateur non trouvé' });
  }

  res.json(user);
});

module.exports = router;
