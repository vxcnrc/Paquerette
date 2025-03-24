<!-- src/components/Gros_titre.vue -->
<template>
  <!-- Le composant "GrosTitre" permet d'afficher un titre centré avec une taille de police personnalisée -->
  <h2 class="gros-titre">
    <!-- Utilisation de <slot> pour permettre l'insertion de contenu dynamique -->
    <slot></slot> <!-- Le contenu à l'intérieur de ce composant est injecté ici -->
  </h2>
</template>

<style scoped>
/* Style spécifique au composant GrosTitre */
.gros-titre {
color: #ee9bff;  /* Couleur du texte */
text-align: center;  /* Centrage du texte horizontalement */
font-size: 3rem;  /* Taille de la police : grande taille */
margin-bottom: 20px;  /* Espace de 20px sous le titre */
}
</style>
