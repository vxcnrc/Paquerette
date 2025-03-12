<template>
    <div class="agenda-container">
      <h1 class="title">Agenda</h1>
      
      <div class="section">
        <h2>Chorale</h2>
        <p>
          La Chorale de l’AECOR répète habituellement les lundis de 18h à 20h en salle RB-001 !
          (voir l’agenda ci-dessous pour les détails).
        </p>
        <iframe
          class="calendar"
          src="https://calendar.google.com/calendar/embed?src=infoaecor%40gmail.com&ctz=Europe/Paris"
          frameborder="0"
          scrolling="no">
        </iframe>
        <a class="add-calendar" 
          href="https://calendar.google.com/calendar/ical/infoaecor%40gmail.com/public/basic.ics"
          target="_blank">
          ➕ Ajouter à Google Agenda
        </a>
      </div>
      
      <div class="section">
        <h2>Orchestre</h2>
        <p>
          L’Orchestre de l’AECOR répète tous les mardis de 18h à 20h en amphi A (bâtiment JF Cier) !
          (voir l’agenda ci-dessous pour les détails)
        </p>
        <iframe
          class="calendar"
          src="https://calendar.google.com/calendar/embed?src=18a37d3c382360b5fe0cb44f9f9e65f72fe27cbecbb40a249fc0bb8a5a32e380%40group.calendar.google.com&ctz=Europe/Paris"
          frameborder="0"
          scrolling="no">
        </iframe>
        <a class="add-calendar" 
          href="https://calendar.google.com/calendar/ical/18a37d3c382360b5fe0cb44f9f9e65f72fe27cbecbb40a249fc0bb8a5a32e380%40group.calendar.google.com/public/basic.ics"
          target="_blank">
          ➕ Ajouter à Google Agenda
        </a>
      </div>
    </div>
  </template>
  
  <style scoped>
  .agenda-container {
    color: white;
    background-color: #121212;
    padding: 2rem;
    text-align: center;
  }
  
  .title {
    font-size: 3rem;
    color: #ee9bff;
    margin-bottom: 1rem;
  }
  
  .section {
    margin-bottom: 2rem;
  }
  
  h2 {
    color: #fba25a;
    font-size: 1.5rem;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .calendar {
    width: 100%;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(255, 123, 0, 0.2);
  }
  
  .add-calendar {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 15px;
    background: #393939;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s;
  }
  
  .add-calendar:hover {
    background: #fba25a;
  }
  </style>
  