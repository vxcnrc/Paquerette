<template>
    <v-menu offset-y>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props"> Autre </v-btn> 
      </template>
      <v-list class="dropdown-menu">
        <v-list-item to="/autre" class="dropdown-item">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
        <v-list-item to="/acces" class="dropdown-item">
          <v-list-item-title>Accès</v-list-item-title>
        </v-list-item>
        <v-list-item to="/agenda" target="_blank" class="dropdown-item">
          <v-list-item-title>Agenda</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </template>
  
  <script>
  export default {
    name: "ContactMenu"
  };
  </script>
  
  <style scoped>
  /* Style du bouton Contact */
  .nav-link {
    color: #ecf0f1;
    text-decoration: none;
    padding: 5px 15px;
    transition: color 0.3s ease, background-color 0.3s ease;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;  /* Assurer la même police */
  }
  
  /* Effet hover du bouton Contact */
  .nav-link:hover {
    color: #fff;
    background-color: #f39c12;
    border-radius: 4px;
  }
  
  /* Style du menu déroulant */
  .dropdown-menu {
    background: #2a2a2a !important;
    border-radius: 4px;
    min-width: 180px;
    padding: 5px 0;
  }
  
  /* Style des éléments du menu */
  .dropdown-item {
    color: #ecf0f1 !important;
    font-size: 18px;  /* Aligné avec la navbar */
    font-weight: 500;
    font-family: 'Roboto', sans-serif; /* Même police */
    padding: 10px 15px;
    text-transform: uppercase;
    transition: background 0.3s ease;
  }
  
  /* Effet hover */
  .dropdown-item:hover {
    background: #f39c12 !important;
    color: #fff !important;
  }
  </style>
  