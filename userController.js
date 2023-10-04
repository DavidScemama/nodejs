const userStorage = require('./userStorage');

// Fonctions du contrôleur pour gérer les utilisateurs
module.exports = {
  getUsers: userStorage.getUsers,
  addUser: userStorage.addUser,
};
