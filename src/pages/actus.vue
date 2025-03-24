<template>
  <div class="actus-container">
    <!-- Section des événements à venir -->
    <h1 class="actus-title">Actualités & Concerts</h1>  <!-- Titre principal de la page -->

    <section class="upcoming-events">
      <h2>Événements à venir</h2>  <!-- Titre de la section "Événements à venir" -->
      <div class="events-grid">
        <!-- Affichage des événements à venir avec v-for -->
        <!-- Le v-for permet de parcourir les événements filtrés dans la variable `upcomingEvents` -->
        <div v-for="event in upcomingEvents" :key="event.id" class="event-card">
          <img :src="event.image" alt="Affiche de l'événement" class="event-image" />  <!-- Image de l'événement -->
          <div class="event-info">
            <h3>{{ event.title }}</h3>  <!-- Titre de l'événement -->
            <p>{{ event.date }} - {{ event.location }}</p>  <!-- Date et lieu de l'événement -->
          </div>
        </div>
      </div>
    </section>

    <!-- Section des événements passés -->
    <section class="past-events">
      <h2>Événements passés</h2>  <!-- Titre de la section "Événements passés" -->
      <div class="events-grid">
        <!-- Affichage des événements passés avec v-for -->
        <!-- Le v-for permet de parcourir les événements filtrés dans la variable `pastEvents` -->
        <div v-for="event in pastEvents" :key="event.id" class="event-card past">
          <img :src="event.image" alt="Affiche de l'événement" class="event-image" />
          <div class="event-info">
            <h3>{{ event.title }}</h3>
            <p>{{ event.date }} - {{ event.location }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Importation de `ref` et `computed` depuis Vue pour gérer l'état réactif et les calculs
import { ref, computed } from 'vue';

// Définition d'un tableau d'événements avec des informations comme l'id, le titre, la date, le lieu et l'image
const events = ref([
  { id: 1, title: 'Concert Chorale', date: '2025-03-01T18:00:00', location: 'Église Saint-Michel, Jean Macé (Lyon)', image: '/Saint_Mich_Chorale.jpg' },
  { id: 2, title: 'Concert Orchestre', date: '2025-04-18', location: 'CCVA de Villeurbanne', image: '/CCVA.jpg' },
  { id: 3, title: 'Concert Tutti', date: '2025-04-27', location: 'Théâtre Astrée, La Doua', image: '/Transbo.jpg' },
  { id: 4, title: 'Fête de la musique', date: '2025-06-21', location: 'Lyon', image: '/Fete_de_la_musique.jpg' },
  { id: 5, title: 'Concert Tutti', date: '2024-11-17', location: 'Église Saint-Michel, Jean Macé', image: '/Saint_Michel_Orchestre.jpg' },
  { id: 6, title: 'Freestival', date: '2024-09-21', location: 'Crous Festival', image: '/Freestival.png' }
]);

// Créer une date de référence qui est la date actuelle
const today = new Date();

// Calculer les événements à venir en filtrant ceux dont la date est après aujourd'hui, triés par date croissante
const upcomingEvents = computed(() => events.value.filter(event => new Date(event.date) >= today).sort((a, b) => new Date(a.date) - new Date(b.date)));

// Calculer les événements passés en filtrant ceux dont la date est avant aujourd'hui, triés par date décroissante
const pastEvents = computed(() => events.value.filter(event => new Date(event.date) < today).sort((a, b) => new Date(b.date) - new Date(a.date)));
</script>

<style scoped>
/* Style principal du conteneur d'événements */
.actus-container {
  max-width: 1200px;  /* Limite la largeur du conteneur */
  margin: auto;  /* Centrer le conteneur sur la page */
  padding: 40px 20px;  /* Espacement à l'intérieur du conteneur */
  color: #ecf0f1;  /* Texte en couleur claire */
  background-color: #1a1a1a;  /* Fond sombre */
}

/* Style du titre de la page */
.actus-title {
  text-align: center;  /* Centrer le titre */
  font-size: 2.5rem;  /* Taille du titre */
  color: #ee9bff;  /* Couleur du titre (rose clair) */
}

/* Style du titre de chaque section */
h2 {
  color: #f39c12;  /* Couleur dorée */
  text-align: center;
  font-size: 2rem;  /* Taille du titre */
  margin-bottom: 20px;  /* Espacement sous le titre */
}

/* Grille des événements */
.events-grid {
  display: grid;  /* Utilisation de grid pour disposer les événements */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  /* Colonnes adaptatives, chaque événement aura une largeur minimale de 300px */
  gap: 20px;  /* Espacement entre les éléments */
  justify-content: center;  /* Centrer les éléments */
  padding: 20px;  /* Espacement interne */
}

/* Style des cartes d'événements */
.event-card {
  background: #2c2c2c;  /* Fond sombre pour les cartes */
  border-radius: 12px;  /* Coins arrondis */
  overflow: hidden;  /* Assure que l'image ne dépasse pas la carte */
  text-align: center;  /* Centrer le contenu de la carte */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);  /* Ombre portée pour l'effet 3D */
  transition: transform 0.3s;  /* Transition pour l'effet de survol */
}

/* Effet au survol de la carte */
.event-card:hover {
  transform: scale(1.05);  /* Agrandir légèrement la carte au survol */
}

/* Carte d'événements passés avec une opacité réduite */
.event-card.past {
  opacity: 0.6;  /* Réduction de l'opacité pour les événements passés */
}

/* Style de l'image de l'événement */
.event-image {
  width: 100%;  /* L'image prend toute la largeur de la carte */
  height: 200px;  /* Hauteur fixe de l'image */
  aspect-ratio: 3/2;  /* Ratio d'aspect pour garder les proportions correctes */
  object-fit: cover;  /* L'image remplit l'espace sans déformer l'image */
}

/* Style de l'information de l'événement */
.event-info {
  padding: 15px;  /* Espacement intérieur de l'information de l'événement */
}

.event-info h3 {
  font-size: 1.4rem;  /* Taille du titre de l'événement */
  color: #ee9bff;  /* Couleur rose clair pour le titre */
}

.event-info p {
  font-size: 1rem;  /* Taille du texte de la date et du lieu */
  color: #ffffff;  /* Texte blanc */
}
</style>
