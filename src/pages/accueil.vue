<template>
  <div id="app">
    <!-- Hero Section -->
    <section class="hero">
      <h1>Bienvenue à l'AECOR</h1>
      <p>L'Association des Étudiants de la Chorale et de l’Orchestre de Rockefeller</p>
      <Bouton to="/actus">Voir les actualités</Bouton>
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
import Bouton from "../components/Bouton.vue";
</script>

<style scoped>
/* Global styles */
body {
  background-color: #1a1a1a;  /* Fond noir */
  color: #ecf0f1;  /* Texte clair */
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
}

/* Hero Section */
.hero {
  text-align: center;
  background: linear-gradient(135deg, #8e44ad, #f39c12); /* Violet + orange */
  padding: 100px 20px;
  color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.cta-button {
  background-color: #000000;  /* Jaune lumineux */
  color: #ee9bff;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #6e5d70;  /* Change de couleur au survol */
}

/* Pourquoi rejoindre l'AECOR Section */
.why-join {
  margin-top: 50px;
  text-align: center;
}

.why-join h2 {
  font-size: 2rem;
  color: #f39c12;
  margin-bottom: 20px;
}

.why-join-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  background-color: #8e44ad;
  border-radius: 12px;
  padding: 30px;
  width: 30%;
  margin-bottom: 20px;
  box-sizing: border-box;
  transition: transform 0.3s;
}

.card h3 {
  font-size: 1.5rem;
  color: #ffd700;
}

.card p {
  font-size: 1rem;
  color: #000000;
}

.card:hover {
  transform: translateY(-10px);
}

/* Nos horaires de répétitions */
.schedule {
  margin-top: 50px;
  text-align: center;
}

.schedule h2 {
  font-size: 2rem;
  color: #f39c12;
  margin-bottom: 20px;
}

.schedule-list {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.schedule-item {
  background-color: #8e44ad;
  padding: 20px;
  border-radius: 12px;
  width: 200px;
  margin: 0 20px;
  box-sizing: border-box;
}

.schedule-item h3 {
  font-size: 1.2rem;
  color: #ffd700;
}

.schedule-item p {
  font-size: 1rem;
  color: #000000;
}
</style>
