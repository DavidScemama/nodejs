const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'bdd', 'users.json');

// Fonction pour lire les utilisateurs depuis le fichier JSON
const readUsersFromFile = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Fonction pour écrire les utilisateurs dans le fichier JSON
const writeUsersToFile = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

module.exports = {
  getUsers: () => readUsersFromFile(),
  addUser: (user) => {
    const users = readUsersFromFile();
    users.push(user);
    writeUsersToFile(users);
  },
};
