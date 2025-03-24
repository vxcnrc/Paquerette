<template>
  <div class="acces-page">
    <!-- Utilisation du composant GrosTitre pour afficher le titre de la page -->
    <GrosTitre>Accès aux Salles de Répétition</GrosTitre>

    <!-- Introduction sur l'accès aux salles -->
    <p>
      Les répétitions de l'AECOR ont lieu sur le campus Rockefeller (faculté Lyon-Est) au 8 Avenue Rockefeller. Voici les informations concernant l'accès aux salles utilisées :
    </p>

    <!-- Salle RB-001 -->
    <div class="room">
      <h3>Salle RB-001</h3>
      <p>La salle RB-001 est située au rez-de-chaussée du bâtiment RB. Pour y accéder, consultez la carte ci-dessous :</p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2784.46448731227!2d4.8817499999999985!3d45.741833299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDQ0JzMwLjYiTiA0wrA1Mic1NC4zIkU!5e0!3m2!1sfr!2sfr!4v1741620642831!5m2!1sfr!2sfr" 
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

    <!-- Amphi A (Bâtiment JF Cier) -->
    <div class="room">
      <h3>Amphi A (Bâtiment JF Cier)</h3>
      <p>L'Amphi A se trouve dans le bâtiment JF Cier. Pour y accéder, consultez la carte ci-dessous :</p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2784.4643177437474!2d4.8791761!3d45.7418367!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDQ0JzI3LjQiTiA0wrA1Mic1Ni4zIkU!5e0!3m2!1sfr!2sfr!4v1741620552103!5m2!1sfr!2sfr" 
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

    <!-- Informations sur l'accès TCL -->
    <div class="tcl-access">
      <h3>Accès TCL</h3>
      <p>Le campus Rockefeller est accessible par les transports en commun. Vous pouvez prendre les lignes suivantes :</p>
      <ul>
        <li><strong>Métro :</strong> Ligne D, arrêt Grange Blanche</li>
        <li><strong>Tram :</strong> T2 et T5</li>
        <li><strong>Bus :</strong> C8, C13, C16, C22, C26 et 24</li>
      </ul>
    </div>

    <!-- Informations supplémentaires sur les horaires -->
    <p>
      Les répétitions ont habituellement lieu les lundis (Chorale) et mardis (Orchestre) de 18h à 20h. Pour plus de précisions, rendez-vous sur la page de l’agenda !
    </p>
  </div>
</template>

<script>
import GrosTitre from "../components/Gros_titre.vue";  // Importation du composant GrosTitre pour le titre

export default {
  name: "Acces",  // Nom du composant
  components: {
    GrosTitre,  // Déclaration du composant GrosTitre
  },
};
</script>

<style scoped>
/* Styles pour la page d'accès */
.acces-page {
  padding: 30px;
  font-family: 'Arial', sans-serif;
  color: #ffffff;  /* Couleur du texte en blanc pour contraster avec le fond */
}

/* Style pour les titres des sections */
h3 {
  color: #ffb78b;  /* Orange clair pour les titres de salle et autres sections */
  font-size: 1.5rem;
  margin-top: 30px;
}

/* Styles pour chaque section de salle */
.room, .tcl-access {
  margin-bottom: 40px;  /* Ajout d'espace sous chaque section */
}

/* Style pour les iframes de Google Maps */
iframe {
  width: 100%;
  height: 450px;
  border: none;  /* Supprime les bordures autour des cartes */
  margin-top: 10px;  /* Ajoute un petit espace au-dessus de la carte */
}

/* Liste des transports en commun */
ul {
  list-style-type: none;  /* Enlève les puces des éléments de la liste */
  padding: 0;  /* Enlève le padding par défaut */
}

/* Style des éléments de la liste */
ul li {
  font-size: 1rem;
  margin-bottom: 10px;  /* Ajoute de l'espace entre les éléments de la liste */
}

/* Style des paragraphes */
p {
  font-size: 1.1rem;
  line-height: 1.6;  /* Augmente l'espacement entre les lignes pour améliorer la lisibilité */
}

/* Section "Accès TCL" pour rendre le texte en gras pour les lignes de transport */
.tcl-access ul li {
  font-weight: bold;  /* Met les lignes de transport en gras */
}

/* Media queries pour les petits écrans (téléphones) */
@media screen and (max-width: 768px) {
  .acces-page {
    padding: 20px;  /* Réduit le padding sur les petits écrans */
  }
  iframe {
    height: 350px;  /* Réduit la taille des iframes sur les petits écrans */
  }
}
</style>
