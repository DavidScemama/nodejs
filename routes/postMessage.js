const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const message = req.body.message;

  if (!message || message.trim() === '') {
    return res.status(400).json({ error: 'Le message ne peut pas être vide.' });
  }

  res.json({ success: true, message: 'Message posté avec succès' });
});

module.exports = router;
