<template>
  <div class="agenda-container">
      <!-- Titre de la page -->
      <h1 class="title">Agenda</h1>
      
      <!-- Section Chorale -->
      <div class="section">
          <h2>Chorale</h2>
          <p>
              La Chorale de l’AECOR répète habituellement les lundis de 18h à 20h en salle RB-001 !
              (voir l’agenda ci-dessous pour les détails).
          </p>
          <!-- Embed du calendrier Google pour la Chorale -->
          <iframe
              class="calendar"
              src="https://calendar.google.com/calendar/embed?src=infoaecor%40gmail.com&ctz=Europe/Paris"
              frameborder="0"
              scrolling="no">
          </iframe>
          <!-- Lien pour ajouter l'agenda de la Chorale à Google Agenda -->
          <a class="add-calendar" 
              href="https://calendar.google.com/calendar/ical/infoaecor%40gmail.com/public/basic.ics"
              target="_blank">
              ➕ Ajouter à Google Agenda
          </a>
      </div>
      
      <!-- Section Orchestre -->
      <div class="section">
          <h2>Orchestre</h2>
          <p>
              L’Orchestre de l’AECOR répète tous les mardis de 18h à 20h en amphi A (bâtiment JF Cier) !
              (voir l’agenda ci-dessous pour les détails)
          </p>
          <!-- Embed du calendrier Google pour l'Orchestre -->
          <iframe
              class="calendar"
              src="https://calendar.google.com/calendar/embed?src=18a37d3c382360b5fe0cb44f9f9e65f72fe27cbecbb40a249fc0bb8a5a32e380%40group.calendar.google.com&ctz=Europe/Paris"
              frameborder="0"
              scrolling="no">
          </iframe>
          <!-- Lien pour ajouter l'agenda de l'Orchestre à Google Agenda -->
          <a class="add-calendar" 
              href="https://calendar.google.com/calendar/ical/18a37d3c382360b5fe0cb44f9f9e65f72fe27cbecbb40a249fc0bb8a5a32e380%40group.calendar.google.com/public/basic.ics"
              target="_blank">
              ➕ Ajouter à Google Agenda
          </a>
      </div>
  </div>
</template>

<script>
export default {
name: "Agenda",  // Nom du composant
};
</script>

<style scoped>
/* Styles pour la page Agenda */
.agenda-container {
color: white;
background-color: #121212;  /* Fond sombre pour la page */
padding: 2rem;
text-align: center;  /* Centrage du texte dans toute la page */
}

/* Style pour le titre principal */
.title {
font-size: 3rem;
color: #ee9bff;  /* Mauve clair pour le titre */
margin-bottom: 1rem;  /* Espace sous le titre */
}

/* Styles pour chaque section (Chorale et Orchestre) */
.section {
margin-bottom: 2rem;  /* Espacement entre les sections */
}

/* Style pour les sous-titres de chaque section (Chorale, Orchestre) */
h2 {
color: #fba25a;  /* Orange clair pour les sous-titres */
font-size: 1.5rem;
}

/* Style pour les paragraphes de description sous chaque titre */
p {
font-size: 1rem;
margin-bottom: 1rem;  /* Espacement sous chaque paragraphe */
}

/* Style pour l'iframe qui intègre les calendriers Google */
.calendar {
width: 100%;  /* Prend toute la largeur disponible */
height: 500px;  /* Hauteur de l'iframe (la taille de l'agenda) */
border-radius: 10px;  /* Coins arrondis */
box-shadow: 0 4px 8px rgba(255, 123, 0, 0.2);  /* Ombre autour de l'iframe */
}

/* Style pour le lien permettant d'ajouter l'agenda à Google Calendar */
.add-calendar {
display: inline-block;
margin-top: 10px;
padding: 10px 15px;
background: #393939;  /* Fond sombre pour le bouton */
color: white;
text-decoration: none;  /* Supprime le soulignement du lien */
border-radius: 5px;  /* Bords arrondis pour le bouton */
transition: background 0.3s;  /* Transition pour l'effet au survol */
}

/* Effet au survol du bouton pour ajouter l'agenda */
.add-calendar:hover {
background: #fba25a;  /* Change la couleur du fond au survol */
}
</style>
