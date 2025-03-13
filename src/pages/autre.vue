<template>
  <div class="contact-page">
    <h1 class="title">Contactez-nous</h1>

    <!-- Section Contacts (Maintenant en haut) -->
    <section class="contacts">
      <h2>Nos réseaux</h2>
      <div class="socials">
        <a href="https://www.instagram.com/aecor.lyon" target="_blank" class="icon instagram">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a href="https://www.facebook.com/search/top?q=chorale%20orchestre%20aecor" target="_blank" class="icon facebook">
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </a>
        <a href="https://www.youtube.com/@orchestrechoraleaecor9580" target="_blank" class="icon youtube">
          <font-awesome-icon :icon="['fab', 'youtube']" />
        </a>
        <a href="mailto:contact@aecor.fr" class="icon email">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
      </div>

      <!-- Formulaire de Contact -->
      <h2>Nous contacter</h2>
      <form @submit.prevent="envoyerMessage" class="contact-form">
        <input type="text" v-model="nom" placeholder="Votre nom" required />
        <input type="email" v-model="email" placeholder="Votre email" required />
        <textarea v-model="message" placeholder="Votre message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>

    <!-- Section Présentation (Maintenant en bas) -->
    <section class="presentation">
      <h2>Le Bureau</h2>
      <div class="grid">
        <div class="person" v-for="(person, index) in bureau" :key="index">
          <p class="name">{{ person.nom }}</p>
          <p class="role">{{ person.poste }}</p>
        </div>
      </div>

      <h2>Nos Chefs</h2>
      <div class="grid">
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
      nom: "",
      email: "",
      message: "",
    };
  },
  methods: {
    envoyerMessage() {
      window.location.href = `mailto:contact@aecor.fr?subject=Message de ${this.nom}&body=${this.message}%0D%0A%0D%0ADe : ${this.email}`;
    },
  },
};
</script>

<style scoped>
.contact-page {
  padding: 40px;
  max-width: 800px;
  margin: auto;
  color: white;
}

/* TITRES */
.title {
  text-align: center;
  font-size: 2.5rem;
  color: #ee9bff;
}

h2 {
  color: #ee9bff;
  margin-top: 30px;
  text-align: center;
}

/* PRÉSENTATION */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.person {
  text-align: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ee9bff;
}

.role {
  color: #bdc3c7;
}

/* RÉSEAUX SOCIAUX */
.socials {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.icon {
  font-size: 2rem;
  transition: transform 0.2s ease;
}

.icon:hover {
  transform: scale(1.2);
}

.instagram { color: #E4405F; }
.facebook { color: #1877F2; }
.youtube { color: #FF0000; }
.email { color: #F4B400; }

/* FORMULAIRE DE CONTACT */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.contact-form input, .contact-form textarea {
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: white;
}

.contact-form textarea {
  resize: none;
  height: 100px;
}

.contact-form button {
  background: linear-gradient(45deg, #ee9bff, #ff6b6b);
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

.contact-form button:hover {
  background: linear-gradient(45deg, #ff6b6b, #ee9bff);
}
</style>
