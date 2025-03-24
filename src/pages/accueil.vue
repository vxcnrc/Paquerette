<template>
  <div id="app">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Bienvenue à l'AECOR</h1>  <!-- Titre principal de la section "Héros" -->
      <p>L'Association des Étudiants de la Chorale et de l’Orchestre de Rockefeller</p> <!-- Description de l'AECOR -->
      <!-- Bouton personnalisé importé depuis le composant Bouton -->
      <Bouton to="/actus">Voir les actualités</Bouton>  <!-- Ce bouton redirige l'utilisateur vers la page des actualités -->
    </section>

    <!-- Pourquoi rejoindre l'AECOR -->
    <section class="why-join">
      <h2>Pourquoi rejoindre l'AECOR ?</h2>
      <div class="why-join-list">
        <div class="card">
          <h3>Ambiance conviviale</h3>
          <p>Rejoignez un groupe d’étudiants passionnés de musique et profitez de moments conviviaux à chaque répétition.</p>
        </div>
        <div class="card">
          <h3>Accessibilité facile</h3>
          <p>Nous nous réunissons à l'Université de Rockefeller, facilement accessible en transports en commun.</p>
        </div>
        <div class="card">
          <h3>Des concerts réguliers</h3>
          <p>Participez à des concerts de qualité, organisés plusieurs fois par an, pour briller sur scène !</p>
        </div>
      </div>
    </section>

    <!-- Nos horaires de répétitions -->
    <section class="schedule">
      <h2>Nos horaires de répétition</h2>
      <div class="schedule-list">
        <div class="schedule-item">
          <h3>🎶 Chorale</h3>
          <p>Les lundis, 18h - 20h</p>
        </div>
        <div class="schedule-item">
          <h3>🎻 Orchestre</h3>
          <p>Les mardis, 18h - 20h</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Importation du composant Bouton (composant réutilisable)
import Bouton from "../components/Bouton.vue";  // Permet d'utiliser ce composant pour afficher des boutons dans cette page
</script>

<style scoped>
/* Global styles */
body {
  background-color: #1a1a1a;  /* Fond noir pour un aspect sombre */
  color: #ecf0f1;  /* Texte clair */
  font-family: 'Poppins', sans-serif;  /* Police par défaut de la page */
  margin: 0;
  padding: 0;
}

#app {
  max-width: 1200px;  /* Limite la largeur maximale de l'application */
  margin: 0 auto;  /* Centrer horizontalement */
  padding: 40px 20px;  /* Espacement autour du contenu */
  box-sizing: border-box;
}

/* Hero Section */
.hero {
  text-align: center;  /* Centrer le texte dans la section */
  background: linear-gradient(135deg, #8e44ad, #f39c12); /* Création d'un fond dégradé violet-orange */
  padding: 100px 20px;  /* Ajouter du padding pour espacer le contenu */
  color: white;  /* Texte blanc */
  border-radius: 12px;  /* Coins arrondis */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);  /* Ombre portée pour donner un effet de profondeur */
}

.hero h1 {
  font-size: 3rem;  /* Taille du titre */
  margin-bottom: 20px;  /* Espacement sous le titre */
}

.hero p {
  font-size: 1.2rem;  /* Taille de la description */
  margin-bottom: 30px;  /* Espacement sous la description */
}

.cta-button {
  background-color: #000000;  /* Fond noir du bouton */
  color: #ee9bff;  /* Texte du bouton en couleur rose */
  padding: 10px 20px;  /* Espacement à l'intérieur du bouton */
  text-decoration: none;  /* Enlever la décoration de lien */
  font-weight: bold;  /* Gras sur le texte */
  border-radius: 5px;  /* Coins arrondis du bouton */
  font-size: 1rem;  /* Taille de la police du bouton */
  transition: background-color 0.3s;  /* Transition sur la couleur de fond au survol */
}

.cta-button:hover {
  background-color: #6e5d70;  /* Changer de couleur au survol */
}

/* Pourquoi rejoindre l'AECOR Section */
.why-join {
  margin-top: 50px;  /* Espacement au-dessus de la section */
  text-align: center;  /* Centrer le texte de la section */
}

.why-join h2 {
  font-size: 2rem;  /* Taille du titre */
  color: #f39c12;  /* Couleur dorée */
  margin-bottom: 20px;  /* Espacement sous le titre */
}

.why-join-list {
  display: flex;  /* Utilisation de Flexbox pour aligner les cartes horizontalement */
  justify-content: space-around;  /* Espacement égal entre les cartes */
  flex-wrap: wrap;  /* Permet au contenu de se mettre à la ligne si nécessaire */
}

.card {
  background-color: #8e44ad;  /* Fond violet pour chaque carte */
  border-radius: 12px;  /* Coins arrondis pour les cartes */
  padding: 30px;  /* Espacement à l'intérieur des cartes */
  width: 30%;  /* Largeur des cartes, ajustable selon l'espace */
  margin-bottom: 20px;  /* Espacement sous chaque carte */
  box-sizing: border-box;  /* Inclure les padding et border dans les dimensions de la carte */
  transition: transform 0.3s;  /* Transition de la transformation au survol */
}

.card h3 {
  font-size: 1.5rem;  /* Taille du titre dans chaque carte */
  color: #ffd700;  /* Couleur dorée du titre */
}

.card p {
  font-size: 1rem;  /* Taille du texte */
  color: #000000;  /* Texte noir pour un bon contraste */
}

.card:hover {
  transform: translateY(-10px);  /* Animation au survol : déplacer la carte vers le haut */
}

/* Nos horaires de répétitions */
.schedule {
  margin-top: 50px;  /* Espacement au-dessus de la section */
  text-align: center;  /* Centrer le texte */
}

.schedule h2 {
  font-size: 2rem;  /* Taille du titre */
  color: #f39c12;  /* Couleur dorée */
  margin-bottom: 20px;  /* Espacement sous le titre */
}

.schedule-list {
  display: flex;  /* Flexbox pour les éléments horaires */
  justify-content: center;  /* Centrer horizontalement */
  margin-top: 20px;  /* Espacement au-dessus des horaires */
}

.schedule-item {
  background-color: #8e44ad;  /* Fond violet pour chaque élément de l'horaire */
  padding: 20px;  /* Espacement intérieur */
  border-radius: 12px;  /* Coins arrondis */
  width: 200px;  /* Largeur des éléments horaires */
  margin: 0 20px;  /* Espacement horizontal entre les éléments */
  box-sizing: border-box;  /* Inclure les bordures et le padding dans les dimensions */
}

.schedule-item h3 {
  font-size: 1.2rem;  /* Taille du titre des horaires */
  color: #ffd700;  /* Couleur dorée du titre */
}

.schedule-item p {
  font-size: 1rem;  /* Taille du texte des horaires */
  color: #000000;  /* Texte noir pour les horaires */
}
</style>
