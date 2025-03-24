<template>
  <!-- Composant `router-link` de Vue.js pour naviguer entre les pages -->
  <!-- Le bouton va rediriger l'utilisateur vers la page spécifiée par le prop `to` -->
  <router-link :to="to" class="custom-button">
    <!-- Le contenu dynamique de ce composant sera inséré ici -->
    <slot></slot>  <!-- Utilisation de slots pour permettre l'insertion de contenu personnalisé dans le bouton -->
  </router-link>
</template>

<script setup>
// Définition du prop `to`, qui permet de spécifier la destination de la navigation
defineProps({
  to: {
    type: String,  // `to` est une chaîne de caractères, représentant l'URL de la destination
    required: true,  // Le prop est obligatoire pour ce composant
  },
});
</script>

<style scoped>
/* Style du bouton personnalisé */
.custom-button {
  background-color: #000000;  /* Fond noir */
  color: #ee9bff;  /* Texte rose clair */
  padding: 10px 20px;  /* Espacement intérieur du bouton */
  text-decoration: none;  /* Enlever la décoration de lien (par défaut un soulignement) */
  font-weight: bold;  /* Texte en gras */
  border-radius: 5px;  /* Coins arrondis du bouton */
  font-size: 1rem;  /* Taille de la police */
  transition: background-color 0.3s, transform 0.2s;  /* Transition pour la couleur de fond et l'effet de transformation */
  display: inline-block;  /* Le bouton s'affiche en tant que bloc en ligne (inline-block) */
  text-align: center;  /* Centrer le texte à l'intérieur du bouton */
}

/* Effet au survol du bouton */
.custom-button:hover {
  background-color: #6e5d70;  /* Couleur de fond change au survol (gris foncé) */
  transform: scale(1.05);  /* Légère augmentation de la taille du bouton au survol */
}
</style>
