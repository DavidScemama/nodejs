const express = require('express');
const router = express.Router();

module.exports = (users) => {
  router.get('/:username', (req, res) => {
    const username = req.params.username;
    const filteredUsers = users.filter((user) => user.username === username && user.password);

    res.json(filteredUsers);
  });
};

module.exports = router;