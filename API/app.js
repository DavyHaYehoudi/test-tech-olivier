// Importation des modules nécessaires
const express = require('express');
const { default: mongoose } = require('mongoose');
const { createUser } = require('./controllers/users');
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");

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

app.use(cors())
app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   })
// );

// Définition des routes
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon site !');
});

app.post("/user",createUser)

// Lancement du serveur
app.listen(2800, () => {
  console.log('Serveur démarré sur le port 2800');
});


