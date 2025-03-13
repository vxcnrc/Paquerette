<!-- src/components/Gros_titre.vue -->
<template>
    <h2 class="gros-titre">
      <slot></slot>
    </h2>
  </template>
  
  <style scoped>
  .gros-titre {
    color: #ee9bff; /* Mauve clair */
    text-align: center;
    font-size: 3rem;
    margin-bottom: 20px;
  }
  </style>
  