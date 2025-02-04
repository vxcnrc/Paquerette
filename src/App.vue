<template>
  <div id="app">
    <!-- En-tête du site -->
    <header class="header">
      <h1>AECOR</h1>
      <p>Association des Étudiants de la Chorale et de l’Orchestre de Rockefeller</p>
      <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/about">À propos</router-link>
        <router-link to="/agenda">Agenda</router-link>
      </nav>
    </header>

    <!-- Présentation de l'AECOR -->
    <section class="intro">
      <h2>Bienvenue sur le site de l'AECOR</h2>
      <p>
        L’AECOR, l’Association des Étudiants de la Chorale et de l’Orchestre de Rockefeller, réunit depuis 2013 tous les étudiants de Lyon. Rejoignez-nous vite !
      </p>
      <p>
        Sur ce site, vous trouverez tout ce qu’il y a à savoir sur l’orchestre et la chorale : les informations générales, le plan d’accès, et comment s’inscrire.
      </p>
    </section>

    <!-- Horaires des répétitions -->
    <section class="schedule">
      <h3>Nos horaires de répétition</h3>
      <div class="rehearsal">
        <h4>Chorale</h4>
        <p>Les lundis, 18h - 20h</p>
      </div>
      <div class="rehearsal">
        <h4>Orchestre</h4>
        <p>Les mardis, 18h - 20h</p>
      </div>
    </section>

    <!-- Pourquoi rejoindre l'AECOR -->
    <section class="why-join">
      <h3>Pourquoi rejoindre l'AECOR ?</h3>
      <ul>
        <li><strong>Une asso où tous les niveaux se côtoient</strong> - Peu importe votre niveau, il y a toujours une place pour vous !</li>
        <li><strong>Un emplacement au sein de la fac</strong> - Répétitions à Rockefeller, Lyon Est, avec un accès facile en transports.</li>
        <li><strong>Un rendez-vous hebdomadaire</strong> - Ambiance conviviale où tous les étudiants sont les bienvenus !</li>
        <li><strong>Des évènements toute l'année</strong> - Concerts 2 à 3 fois par an, moments forts à ne pas manquer !</li>
      </ul>
    </section>

    <!-- Footer avec accès au site et contacts -->
    <footer>
      <p>Bonne visite, et à bientôt à l'Aecor !</p>
      <p><a href="https://aecor.fr/agenda/" target="_blank">Voir l’agenda pour les horaires et lieux</a></p>
    </footer>
  </div>
</template>

<script setup>
// Importation des composants et autres fonctionnalités
import { ref } from 'vue';
</script>

<style scoped>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
}

/* Header */
.header {
  background-color: #42b983;
  color: white;
  text-align: center;
  padding: 20px 0;
}

.header h1 {
  font-size: 3rem;
}

.header nav {
  margin-top: 10px;
}

.header nav router-link {
  color: white;
  margin: 0 15px;
  text-decoration: none;
}

.header nav router-link:hover {
  color: #ffeb3b;
}

/* Sections */
section {
  padding: 20px;
  margin: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

section h2,
section h3 {
  color: #42b983;
}

section ul {
  list-style-type: none;
  padding: 0;
}

section li {
  margin: 10px 0;
}

/* Horaires des répétitions */
.schedule .rehearsal {
  background-color: #f9f9f9;
  /* margin-bottom:  */
}
</style>