const express = require('express');
const router = express.Router();
const fs = require('fs');

// Simule un système de stockage en mémoire pour les messages
let messages = [];

// Route pour poster un message
router.post('/', (req, res) => {
  const message = req.body.message;

  if (!message || message.trim() === '') {
    return res.status(400).json({ error: 'Le message ne peut pas être vide.' });
  }

  // Ajoutez le message à votre système de stockage en mémoire
  messages.push({ message: req.body.message });

  // Écrivez les données mises à jour dans le fichier messages.json
  fs.writeFileSync('./bdd/messages.json', JSON.stringify(message, null, 2));

  res.json({ success: true, message: 'Message posté avec succès' });
});

module.exports = router;
