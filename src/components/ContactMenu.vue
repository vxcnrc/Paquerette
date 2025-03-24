<template>
  <!-- Menu déroulant avec Vuetify -->
  <v-menu offset-y>  <!-- v-menu est un composant de Vuetify pour créer des menus déroulants -->
    
    <!-- Utilisation de v-slot:activator pour personnaliser le bouton qui ouvre le menu -->
    <template v-slot:activator="{ props }">
      <!-- v-btn est un composant de Vuetify pour les boutons -->
      <v-btn v-bind="props" class="nav-link" variant="text">Autre</v-btn>  <!-- Ce bouton déclenche l'ouverture du menu -->
    </template>

    <!-- Liste d'éléments dans le menu déroulant -->
    <v-list class="dropdown-menu">  <!-- v-list est un composant Vuetify pour une liste d'éléments -->
      <v-list-item to="/autre" class="dropdown-item">  <!-- v-list-item définit chaque élément du menu -->
        <v-list-item-title>Contact</v-list-item-title>  <!-- Le titre de l'élément du menu -->
      </v-list-item>
      <v-list-item to="/acces" class="dropdown-item">
        <v-list-item-title>Accès</v-list-item-title>
      </v-list-item>
      <v-list-item to="/agenda" class="dropdown-item">
        <v-list-item-title>Agenda</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "ContactMenu"  // Le nom du composant est "ContactMenu"
};
</script>

<style scoped>
/* Style du bouton "Autre" pour ressembler aux autres liens du header */
.nav-link {
  color: #ecf0f1;  /* Couleur du texte du bouton */
  text-decoration: none;  /* Enlever la décoration par défaut (soulignement) */
  padding: 5px 15px;  /* Espacement autour du texte du bouton */
  transition: color 0.3s ease, background-color 0.3s ease;  /* Effet de transition pour la couleur du texte et le fond */
  text-transform: uppercase;  /* Mettre le texte en majuscule */
  font-size: 18px;  /* Taille de la police */
  font-weight: 500;  /* Poids de la police */
  font-family: 'Roboto', sans-serif;  /* Police utilisée pour le bouton */
  min-height: 0;  /* Ajuste la hauteur du bouton pour qu'il corresponde à son contenu */
}

/* Effet au survol du bouton "Autre" */
.nav-link:hover {
  color: #fff;  /* Change la couleur du texte au survol */
  background-color: #f39c12;  /* Change la couleur du fond au survol */
  border-radius: 4px;  /* Ajoute des bords arrondis au survol */
}

/* Style du menu déroulant */
.dropdown-menu {
  background: #2a2a2a !important;  /* Couleur de fond du menu */
  border-radius: 4px;  /* Coins arrondis du menu */
  min-width: 180px;  /* Largeur minimale du menu */
  padding: 5px 0;  /* Espacement interne du menu */
}

/* Style des éléments du menu */
.dropdown-item {
  color: #ecf0f1 !important;  /* Couleur du texte des éléments du menu */
  font-size: 18px;  /* Taille de la police des éléments du menu */
  font-weight: 500;  /* Poids de la police */
  font-family: 'Roboto', sans-serif;  /* Police utilisée pour les éléments du menu */
  padding: 10px 15px;  /* Espacement autour du texte de chaque élément */
  text-transform: uppercase;  /* Texte en majuscule */
  transition: background 0.3s ease;  /* Effet de transition pour le fond */
}

/* Effet au survol des éléments du menu */
.dropdown-item:hover {
  background: #f39c12 !important;  /* Change la couleur du fond au survol */
  color: #fff !important;  /* Change la couleur du texte au survol */
}
</style>
