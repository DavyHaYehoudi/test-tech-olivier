// Importation des modules nécessaires
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

//Connexion database
mongoose
  .connect("mongodb+srv://technicalTest:12345@cluster0.jmqj7js.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.log("Pas de connexion à MongoDB  :(", err));


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


