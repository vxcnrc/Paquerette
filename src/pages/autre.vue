<template>
  <div class="contact-page">
    <!-- Titre de la page "Contactez-nous" -->
    <h1 class="title">Contactez-nous</h1>

    <!-- Section Contacts (Formulaire de Contact) -->
    <section class="contacts">

      <!-- Formulaire de Contact -->
      <h2>Nous contacter</h2>
      <form @submit.prevent="envoyerMessage" class="contact-form">
        <!-- Champ pour le nom -->
        <input type="text" v-model="nom" placeholder="Votre nom" required />
        <!-- Champ pour l'email -->
        <input type="email" v-model="email" placeholder="Votre email" required />
        <!-- Champ pour le message -->
        <textarea v-model="message" placeholder="Votre message" required></textarea>
        <!-- Bouton de soumission -->
        <button type="submit">Envoyer</button>
      </form>
    </section>

    <!-- Section Présentation du Bureau -->
    <section class="presentation">
      <h2>Le Bureau</h2>
      <div class="grid">
        <!-- Affichage dynamique des membres du bureau -->
        <div class="person" v-for="(person, index) in bureau" :key="index">
          <p class="name">{{ person.nom }}</p>
          <p class="role">{{ person.poste }}</p>
        </div>
      </div>

      <!-- Section des Chefs -->
      <h2>Nos Chefs</h2>
      <div class="grid">
        <!-- Affichage dynamique des chefs -->
        <div class="person" v-for="(chef, index) in chefs" :key="index">
          <p class="name">{{ chef.nom }}</p>
          <p class="role">{{ chef.poste }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Données du bureau et des chefs
      bureau: [
        { nom: "Victoria Nurcelli", poste: "Présidente" },
        { nom: "Pierre-Antoine Moreno", poste: "Vice-président" },
        { nom: "Thomas Stavis", poste: "VP Secrétaire" },
        { nom: "Félix", poste: "VP Trésorier" },
        { nom: "Emmanuel Memmi", poste: "VP Trésorier" },
        { nom: "Margaux", poste: "CM Communication" },
        { nom: "Juliette", poste: "CM Communication" },
        { nom: "Roxane", poste: "CM Secrétaire" },
        { nom: "Marinette", poste: "CM Partenariat" },
        { nom: "Jehanne", poste: "CM Assistante Direction" },
      ],
      chefs: [
        { nom: "Esteban", poste: "Chef de chœur" },
        { nom: "Emile", poste: "Chef de chœur et d'orchestre" },
        { nom: "Lou", poste: "Cheffe d'orchestre" },
        { nom: "Aymeric", poste: "Chef d'orchestre" },
      ],
      // Données du formulaire
      nom: "",
      email: "",
      message: "",
    };
  },
  methods: {
    // Fonction d'envoi du message via mailto
    envoyerMessage() {
      // Envoie un e-mail via le client par défaut
      window.location.href = `mailto:contact@aecor.fr?subject=Message de ${this.nom}&body=${this.message}%0D%0A%0D%0ADe : ${this.email}`;
    },
  },
};
</script>

<style scoped>
/* Style global de la page de contact */
.contact-page {
  padding: 40px;
  max-width: 800px;
  margin: auto;
  color: white;
}

/* Style du titre principal */
.title {
  text-align: center;
  font-size: 2.5rem;
  color: #ee9bff; /* Couleur mauve clair */
}

/* Style des sous-titres des sections */
h2 {
  color: #ee9bff;
  margin-top: 30px;
  text-align: center;
}

/* Style de la grille pour le bureau et les chefs */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

/* Style de chaque membre du bureau ou des chefs */
.person {
  text-align: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

/* Style pour les noms et les rôles */
.name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ee9bff; /* Couleur mauve clair */
}

.role {
  color: #bdc3c7; /* Couleur gris clair */
}

/* Style pour le formulaire de contact */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

/* Style des champs du formulaire (inputs et textarea) */
.contact-form input, .contact-form textarea {
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: white;
}

/* Style pour la zone de texte (textarea) */
.contact-form textarea {
  resize: none;
  height: 100px; /* Hauteur spécifique pour la zone de message */
}

/* Style pour le bouton du formulaire */
.contact-form button {
  background: linear-gradient(45deg, #ee9bff, #ff6b6b);
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

/* Effet au survol du bouton */
.contact-form button:hover {
  background: linear-gradient(45deg, #ff6b6b, #ee9bff);
}
</style>
