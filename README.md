# Description

Application de gestion d'utilisateurs et de messages

Cette application est un exemple de serveur Node.js qui gère les utilisateurs et les messages. Elle utilise Express.js pour gérer les routes et stocke les données des utilisateurs et des messages dans des fichiers JSON.

## Installation

1. Assurez-vous d'avoir Node.js installé sur votre machine.
2. Clonez ce dépôt ou téléchargez le code source.

```bash
git clone https://github.com/DavidScemama/nodejs.git
```

3. Dans le répertoire racine de l'application, exécutez la commande suivante pour installer les dépendances :

```bash
npm start
```

## Routes API 

L'application expose plusieurs routes pour gérer les utilisateurs et les messages :

### 1. Ajouter un utilisateur
Route : POST http://localhost:3000/addUser

Description : Permet d'ajouter un nouvel utilisateur.

Paramètres : Requiert un objet JSON avec les champs "username", "email" et "password".

Exemple de requête avec Postman :

```
{
  "username": "usernae",
  "email": "utilisateur@example.com",
  "password": "password"
}
```

### 2. Obtenir un utilisateur par nom d'utilisateur
Route : GET http://localhost:3000/getUser/:username

Description : Permet d'obtenir les détails d'un utilisateur en spécifiant son nom d'utilisateur.

Paramètres : Le nom d'utilisateur dans l'URL.

Exemple de requête avec Postman : Utilisez cette route pour obtenir les détails d'un utilisateur en remplaçant :username par le nom d'utilisateur souhaité.

### 3. Mettre à jour les informations d'un utilisateur

Route : PUT http://localhost:3000/updateUser/:username

Description : Permet de mettre à jour les informations d'un utilisateur en spécifiant son nom d'utilisateur.

Paramètres : Le nom d'utilisateur dans l'URL et un objet JSON avec les champs "newUsername" et "newEmail".

Exemple de requête avec Postman :

```
{
  "newUsername": "newusername",
  "newEmail": "new.email@gmail.com"
}

```
### 4. Supprimer un utilisateur
Route : DELETE http://localhost:3000/deleteUser/:username

Description : Permet de supprimer un utilisateur en spécifiant son nom d'utilisateur.

Paramètres : Le nom d'utilisateur dans l'URL.

Exemple de requête avec Postman : Utilisez cette route pour supprimer un utilisateur en remplaçant :username par le nom d'utilisateur souhaité.
### 5. Poster un message
Route : POST /postMessage
Description : Permet de poster un message.
Paramètres : Requiert un objet JSON avec le champ "message".
Exemple de requête avec Postman :

```
{
  "message": "Ceci est un message de test."
}
```

### 6. Obtenir tous les utilisateurs avec un nom donné
Route : GET http://localhost:3000/getAllUsers/:username

Description : Permet d'obtenir tous les utilisateurs avec un nom donné (filtre par nom d'utilisateur).

Paramètres : Le nom d'utilisateur dans l'URL.

Exemple de requête avec Postman : Utilisez cette route pour obtenir la liste des utilisateurs avec un nom donné en remplaçant :username par le nom d'utilisateur souhaité.