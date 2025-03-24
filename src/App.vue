<template>
  <div id="app">
    <!-- Header -->
    <header class="header">
      <nav class="nav">
        <!-- Router Links pour navigation entre les pages -->
        <!-- Utilisation de Vue Router pour gérer la navigation multi-pages -->
        <router-link to="/">Accueil</router-link> <!-- Redirection vers la page d'accueil -->
        <router-link to="/actus">Actus</router-link> <!-- Redirection vers la page des actus -->
        <router-link to="/espace_adherents">Espace Adhérents</router-link> <!-- Redirection vers l'espace adhérents -->
        <router-link to="/galerie">Galerie</router-link> <!-- Redirection vers la galerie -->
        
        <!-- Appel du composant ContactMenu (réutilisable) -->
        <!-- C'est un composant personnalisé qui peut afficher un menu de contact -->
        <ContactMenu/>
      </nav>
    </header>

    <!-- Vue Router view: Affiche le contenu dynamique en fonction de la route active -->
    <!-- Ceci est un composant de Vue Router pour afficher les pages associées à chaque route -->
    <RouterView></RouterView> <!-- Ceci représente la vue dynamique de la page active -->

    <!-- Footer -->
    <footer class="footer">
      <p>Bonne visite, et à bientôt à l'AECOR !</p>
      <!-- Lien vers l'agenda externe -->
      <p>
        <a href="https://aecor.fr/agenda/" target="_blank">
          Voir l’agenda pour les horaires et lieux
        </a>
      </p>
    </footer>
  </div>
</template>

<script setup>
// Importation des composants nécessaires
import { RouterView } from 'vue-router';  // Import de RouterView pour Vue Router, utilisé pour afficher le contenu en fonction de la route
import './assets/main.css';  // Import des styles CSS globaux
import { createWebSocketModuleRunnerTransport } from 'vite/module-runner';  // Ce module est peut-être inutile ici, il peut être retiré s'il n'est pas utilisé
import ContactMenu from './components/ContactMenu.vue';  // Import du composant personnalisé ContactMenu

</script>

<style scoped>
/* Global Styles (Styles globaux pour toute l'application) */
* {
  margin: 0;  /* Réinitialisation des marges par défaut des éléments */
  padding: 0;  /* Réinitialisation des espacements par défaut */
  box-sizing: border-box;  /* Assure que la largeur et la hauteur incluent les bordures et les marges */
  font-family: 'Roboto', sans-serif;  /* Police de caractères par défaut */
}

/* App container */
#app {
  padding-top: 70px;  /* Ajoute un espace en haut pour éviter que le contenu ne soit caché derrière la navbar fixe */
}

/* Navigation Bar */
.nav {
  position: fixed;  /* Positionne la barre de navigation de manière fixe en haut de la page */
  top: 0;  /* Placer la barre en haut de la page */
  left: 0;  /* Aligner à gauche */
  width: 100%;  /* Prend toute la largeur de la page */
  background: #2a2a2a;  /* Couleur de fond de la barre de navigation */
  padding: 10px 0;  /* Espacement autour des éléments */
  z-index: 10;  /* Assure que la navbar soit toujours au-dessus des autres éléments */
  display: flex;  /* Utilisation de flexbox pour aligner les éléments horizontalement */
  justify-content: center;  /* Centrer les liens horizontalement */
  gap: 30px;  /* Espace entre les éléments du menu */
  font-size: 18px;  /* Taille de la police des liens */
  text-transform: uppercase;  /* Texte en majuscules */
  font-weight: 500;  /* Poids de la police */
}

.nav a {
  color: #ecf0f1;  /* Couleur des liens */
  text-decoration: none;  /* Enlever la décoration par défaut des liens */
  padding: 5px 15px;  /* Espacement autour du texte du lien */
  transition: color 0.3s ease, background-color 0.3s ease;  /* Effet de transition au survol */
}

.nav a:hover {
  color: #fff;  /* Couleur des liens au survol */
  background-color: #f39c12;  /* Couleur de fond au survol */
  border-radius: 4px;  /* Coins arrondis au survol */
}

/* Footer */
.footer {
  text-align: center;  /* Centrer le texte du footer */
  margin-top: 40px;  /* Marge au-dessus pour espacer du contenu précédent */
  padding: 20px;  /* Espacement à l'intérieur du footer */
  background: #2a2a2a;  /* Couleur de fond du footer */
  color: white;  /* Couleur du texte du footer */
  border-radius: 8px;  /* Coins arrondis du footer */
}

.footer a {
  color: #ffd700;  /* Couleur des liens dans le footer */
  text-decoration: none;  /* Enlever la décoration par défaut des liens */
}

.footer a:hover {
  text-decoration: underline;  /* Souligner les liens au survol */
}

/* Add smooth scroll */
html {
  scroll-behavior: smooth;  /* Ajoute un effet de défilement fluide lorsque l'utilisateur clique sur un lien d'ancrage */
}
</style>
