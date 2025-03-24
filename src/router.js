// Importation des modules nécessaires pour Vue Router
import { createRouter, createWebHistory } from 'vue-router';  // `createRouter` pour créer un router Vue et `createWebHistory` pour la gestion des URL en mode historique (sans #)

// Importation des pages qui seront associées aux différentes routes de l'application
import Accueil from "./pages/accueil.vue";  // Page d'accueil de l'application
import Actus from "./pages/actus.vue";  // Page des actualités
import Espace_Adherents from "./pages/espace_adherents.vue";  // Page de l'espace adhérents
import Autre from "./pages/autre.vue";  // Autre page, peut-être une page de contact ou autre contenu
import Galerie from "./pages/galerie.vue";  // Page galerie des images
import Agenda from "./pages/agenda.vue";  // Page agenda des événements
import Acces from "./pages/acces.vue";  // Page d'accès (probablement des informations pratiques sur l'accès à l'association)

// Définition des routes de l'application
const routes = [
  { path: '/', component: Accueil },  // La route `/` affichera la page `Accueil.vue`
  { path: '/actus', component: Actus },  // La route `/actus` affichera la page `Actus.vue`
  { path: '/espace_adherents', component: Espace_Adherents },  // La route `/espace_adherents` affichera la page `Espace_Adherents.vue`
  { path: '/autre', component: Autre },  // La route `/autre` affichera la page `Autre.vue`
  { path: '/galerie', component: Galerie },  // La route `/galerie` affichera la page `Galerie.vue`
  { path: '/agenda', component: Agenda },  // La route `/agenda` affichera la page `Agenda.vue`
  { path: '/acces', component: Acces}  // La route `/acces` affichera la page `Acces.vue`
];

// Création de l'instance du router
const router = createRouter({
  history: createWebHistory(),  // Utilisation du mode "historique" pour une navigation sans "#" dans les URL (ex : `/actus` au lieu de `/actus#`)
  routes,  // Définition des routes que le router va utiliser pour afficher les pages
});

// Exportation du router pour qu'il soit utilisé dans le fichier principal `main.js`
export default router;
