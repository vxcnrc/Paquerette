<template>
  <div class="acces-page">
    <GrosTitre>Accès aux Salles de Répétition</GrosTitre>

    <p>
      Les répétitions de l'AECOR ont lieu sur le campus Rockefeller (faculté Lyon-Est) au 8 Avenue Rockefeller. Voici les informations concernant l'accès aux salles utilisées :
    </p>

    <div class="room">
      <h3>Salle RB-001</h3>
      <p>La salle RB-001 est située au rez-de-chaussée du bâtiment RB. Pour y accéder, consultez la carte ci-dessous :</p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2784.46448731227!2d4.8817499999999985!3d45.741833299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDQ0JzMwLjYiTiA0wrA1Mic1NC4zIkU!5e0!3m2!1sfr!2sfr!4v1741620642831!5m2!1sfr!2sfr" 
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

    <div class="room">
      <h3>Amphi A (Bâtiment JF Cier)</h3>
      <p>L'Amphi A se trouve dans le bâtiment JF Cier. Pour y accéder, consultez la carte ci-dessous :</p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2784.4643177437474!2d4.8791761!3d45.7418367!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDQ0JzI3LjQiTiA0wrA1Mic1Ni4zIkU!5e0!3m2!1sfr!2sfr!4v1741620552103!5m2!1sfr!2sfr" 
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

    <div class="tcl-access">
      <h3>Accès TCL</h3>
      <p>Le campus Rockefeller est accessible par les transports en commun. Vous pouvez prendre les lignes suivantes :</p>
      <ul>
        <li><strong>Métro :</strong> Ligne D, arrêt Grange Blanche</li>
        <li><strong>Tram :</strong> T2 et T5</li>
        <li><strong>Bus :</strong> C8, C13, C16, C22, C26 et 24</li>
      </ul>
    </div>

    <p>
      Les répétitions ont habituellement lieu les lundis (Chorale) et mardis (Orchestre) de 18h à 20h. Pour plus de précisions, rendez-vous sur la page de l’agenda !
    </p>
  </div>
</template>

<script>
import GrosTitre from "../components/Gros_titre.vue";

export default {
  name: "Acces",
  components: {
    GrosTitre,
  },
};
</script>

<style scoped>
.acces-page {
  padding: 30px;
  font-family: 'Arial', sans-serif;
  color: #ffffff;
}

h3 {
  color: #ffb78b; /* Orange clair */
  font-size: 1.5rem;
  margin-top: 30px;
}

.room, .tcl-access {
  margin-bottom: 40px;
}

iframe {
  width: 100%;
  height: 450px;
  border: none;
  margin-top: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  font-size: 1rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.tcl-access ul li {
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .acces-page {
    padding: 20px;
  }
  iframe {
    height: 350px;
  }
}
</style>
