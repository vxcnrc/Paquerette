<template>
  <div id="app">
    <!-- Header -->
    <header class="header">
      <nav class="nav">
        <router-link to="/">Accueil</router-link>
        <router-link to="/actus">Actus</router-link>
        <router-link to="/espace_adherents">Espace Adhérents</router-link>
        <router-link to="/galerie">Galerie</router-link>
        <ContactMenu/>
      </nav>
    </header>
    <RouterView></RouterView>
    <!-- Footer -->
    <footer class="footer">
      <p>Bonne visite, et à bientôt à l'AECOR !</p>
      <p>
        <a href="https://aecor.fr/agenda/" target="_blank">
          Voir l’agenda pour les horaires et lieux
        </a>
      </p>
    </footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import './assets/main.css'; 
import { createWebSocketModuleRunnerTransport } from 'vite/module-runner';
import ContactMenu from './components/ContactMenu.vue';

</script>

<style scoped>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

/* App container */
#app {
  padding-top: 70px;
}

/* Navigation Bar */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #2a2a2a;
  padding: 10px 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  gap: 30px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
}

.nav a {
  color: #ecf0f1;
  text-decoration: none;
  padding: 5px 15px;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.nav a:hover {
  color: #fff;
  background-color: #f39c12;
  border-radius: 4px;
}

/* Footer */
.footer {
  text-align: center;
  margin-top: 40px;
  padding: 20px;
  background: #2a2a2a;
  color: white;
  border-radius: 8px;
}

.footer a {
  color: #ffd700;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

/* Add smooth scroll */
html {
  scroll-behavior: smooth;
}
</style>
