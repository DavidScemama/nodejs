let users = []; 

module.exports = {
  getUsers: () => users,
  addUser: (user) => users.push(user),
  // Autres fonctions pour la gestion des utilisateurs
};
