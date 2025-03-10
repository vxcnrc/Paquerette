<template>
  <div class="actus-container">
    <h1 class="actus-title">Actualités & Concerts</h1>
    
    <section class="upcoming-events">
      <h2>Événements à venir</h2>
      <div class="events-grid">
        <div v-for="event in upcomingEvents" :key="event.id" class="event-card">
          <img :src="event.image" alt="Affiche de l'événement" class="event-image" />
          <div class="event-info">
            <h3>{{ event.title }}</h3>
            <p>{{ event.date }} - {{ event.location }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="past-events">
      <h2>Événements passés</h2>
      <div class="events-grid">
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
import { ref, computed } from 'vue';

const events = ref([
  { id: 1, title: 'Concert Chorale', date: '2025-03-01T18:00:00', location: 'Église Saint-Michel, Jean Macé (Lyon)', image: '/Saint_Mich_Chorale.jpg' },
  { id: 2, title: 'Concert Orchestre', date: '2025-04-18', location: 'CCVA de Villeurbanne', image: '/CCVA.jpg' },
  { id: 3, title: 'Concert Tutti', date: '2025-04-27', location: 'Théâtre Astrée, La Doua', image: '/Transbo.jpg' },
  { id: 4, title: 'Fête de la musique', date: '2025-06-21', location: 'Lyon', image: '/Fete_de_la_musique.jpg' },
  { id: 5, title: 'Concert Tutti', date: '2024-11-17', location: 'Église Saint-Michel, Jean Macé', image: '/Saint_Michel_Orchestre.jpg' },
  { id: 6, title: 'Freestival', date: '2024-09-21', location: 'Crous Festival', image: '/Freestival.png' }
]);

const today = new Date();
const upcomingEvents = computed(() => events.value.filter(event => new Date(event.date) >= today).sort((a, b) => new Date(a.date) - new Date(b.date)));
const pastEvents = computed(() => events.value.filter(event => new Date(event.date) < today).sort((a, b) => new Date(b.date) - new Date(a.date)));
</script>

<style scoped>
.actus-container {
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
  color: #ecf0f1;
  background-color: #1a1a1a;
}

.actus-title {
  text-align: center;
  font-size: 2.5rem;
  color: #ee9bff;
}

h2 {
  color: #f39c12;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.event-card {
  background: #2c2c2c;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}

.event-card:hover {
  transform: scale(1.05);
}

.event-card.past {
  opacity: 0.6;
}

.event-image {
  width: 100%;
  height: 200px;
  aspect-ratio: 3/2;
  object-fit: cover;
}

.event-info {
  padding: 15px;
}

.event-info h3 {
  font-size: 1.4rem;
  color: #ee9bff;
}

.event-info p {
  font-size: 1rem;
  color: #ffffff;
}
</style>