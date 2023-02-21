// Importation des modules nécessaires
const express = require('express');
const app = express();

// Configuration de l'application
app.use(express.json()); // Permet de traiter les données envoyées au format JSON

// Définition des routes
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon site !');
});

// Lancement du serveur
app.listen(2800, () => {
  console.log('Serveur démarré sur le port 2800');
});


