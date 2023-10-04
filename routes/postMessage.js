const express = require('express');
const router = express.Router();
const fs = require('fs');

// Simule un système de stockage en mémoire pour les messages
let messages = [];

// Route pour obtenir tous les messages
router.post('/', (req, res) => {
  const message = req.body.message;

  if (!message || message.trim() === '') {
    return res.status(400).json({ error: 'Le message ne peut pas être vide.' });
  }

  // Pour ajouter le message à votre système de stockage en mémoire
  messages.push({ message: req.body.message });

  // Pour écrire les données mises à jour dans messages.json
  fs.writeFileSync('./bdd/messages.json', JSON.stringify(messages, null, 2));

  res.json({ success: true, message: 'Message posté avec succès' });
});

module.exports = router;
