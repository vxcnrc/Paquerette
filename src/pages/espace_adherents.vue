<template>
  <div class="espace-adherents" :class="{ blur: !accessGranted }">
    <!-- Modal de connexion -->
    <v-dialog v-model="dialog" persistent max-width="400px">
      <v-card>
        <v-card-title class="headline">Accès restreint</v-card-title>
        <v-card-text>
          <p>Veuillez entrer le code pour accéder aux partitions :</p>
          <v-text-field
            v-model="enteredCode"
            label="Code d'accès"
            :error="error"
            @keydown.enter="verifyCode"
            outlined
          ></v-text-field>
          <p v-if="error" class="error-message">Code incorrect, veuillez réessayer.</p>
        </v-card-text>
        <v-card-actions class="button-container">
          <v-btn color="primary" @click="verifyCode" :class="{ 'shake': error }">Valider</v-btn>
          <v-btn color="error" @click="goHome">Retour à l'accueil</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Contenu de la page après validation -->
    <h1>Espace Adhérents</h1>
    <p>Bienvenue dans l'espace adhérents. Accédez aux partitions selon votre pupitre.</p>

    <!-- Sections Chorale et Orchestre -->
    <v-expansion-panels multiple>
      <v-expansion-panel>
        <v-expansion-panel-title>Partitions Chorale</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="grid">
            <div v-for="(morceau, index) in partitions.chorale" :key="index" class="morceau">
              <img :src="morceau.image" :alt="morceau.titre" @click="openMorceau(morceau)">
              <p>{{ morceau.titre }}</p>
            </div>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>Partitions Orchestre</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="grid">
            <div v-for="(morceau, index) in partitions.orchestre" :key="index" class="morceau">
              <img :src="morceau.image" :alt="morceau.titre" @click="openMorceau(morceau)">
              <p>{{ morceau.titre }}</p>
            </div>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- Pop-up pour choisir la partition par instrument -->
    <v-dialog v-model="morceauDialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">{{ morceauSelectionne.titre }}</v-card-title>
        <v-card-text>
          <p>Choisissez votre instrument :</p>
          <v-list>
            <v-list-item v-for="(lien, instrument) in morceauSelectionne.partitions" :key="instrument" @click="telechargerPartition(lien)">
              <v-list-item-title>{{ instrument }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" @click="morceauDialog = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "EspaceAdherents",
  data() {
    return {
      accessGranted: false,
      dialog: true,
      enteredCode: "",
      error: false,
      partitions: {
        chorale: [
          { titre: "O Fortuna", image: "/public/images/o-fortuna.jpg", partitions: { "Chœur": "/public/partitions/o-fortuna.pdf" } },
          { titre: "Ave Verum", image: "/public/images/ave-verum.jpg", partitions: { "Chœur": "/public/partitions/ave-verum.pdf" } }
        ],
        orchestre: [
          { titre: "Stabat Mater, Poulenc", image: "/public/images/Poulenc.jpg", partitions: { "Alto clé de sol": "/public/partitions/Poulenc-Alto-cle-de-sol.pdf", "Alto clé Ut": "/public/partitions/Poulenc-Altos.pdf","Basson 1 & 2": "/public/partitions/Poulenc-Basson.pdf","Basson 3": "/public/partitions/Poulenc-Basson_3.pdf","Clarinette Basse": "/public/partitions/Poulenc-Clarinette_Basse.pdf","Clarinette Si b": "/public/partitions/Poulenc-Clarinette_en_Sib.pdf","Contrebasse 1": "/public/partitions/Poulenc-Contrebasse_1.pdf","Contrebasse 2": "/public/partitions/Poulenc-Contrebasse_2.pdf","Cor en Fa": "/public/partitions/Poulenc-Cor_en_Fa.pdf","Flûte": "/public/partitions/Poulenc-Flute.pdf","Hautbois": "/public/partitions/Poulenc-Hautbois.pdf","Sax Alto 1": "/public/partitions/Poulenc-Saxophone_Alto_1.pdf","Sax Alto 2": "/public/partitions/Poulenc-Saxophone_Alto_2.pdf","Timbales": "/public/partitions/Poulenc-Timbales.pdf","Trombone 1": "/public/partitions/Poulenc-Trombone_1.pdf","Trombone 2": "/public/partitions/Poulenc-Trombone_2.pdf", "Trompette 1 & 2": "/public/partitions/Poulenc-Trompette_en_Sib1_2.pdf","Trompette 3": "/public/partitions/Poulenc-Trompette_en_Sib_3.pdf","Violoncelle": "/public/partitions/Poulenc-Violoncelles.pdf","Violon 1": "/public/partitions/Poulenc-Violons_1.pdf","Violon 2": "/public/partitions/Poulenc-Violons_2.pdf","Violon 3": "/public/partitions/Poulenc-Violons_3.pdf",} },
          { titre: "Schéhérazade, Rimski-Korsakov", image: "/public/images/rimski.jpg", partitions: { "Clarinette 1": "/public/partitions/bolero-clarinette.pdf", "Trompette 1": "/public/partitions/bolero-trompette.pdf" } },
          { titre: "Concerto pour violon, Mendelssohn", image: "/public/images/mendelssohn.avif", partitions: { "Clarinette 1": "/public/partitions/bolero-clarinette.pdf", "Trompette 1": "/public/partitions/bolero-trompette.pdf" } },
          { titre: "Carmen, Bizet", image: "/public/images/bizet.jpg", partitions: { "Clarinette 1": "/public/partitions/bolero-clarinette.pdf", "Trompette 1": "/public/partitions/bolero-trompette.pdf" } },
          { titre: "The Mask of Zorro, James Horner", image: "/public/images/zorro.jpg", partitions: { "Clarinette 1": "/public/partitions/bolero-clarinette.pdf", "Trompette 1": "/public/partitions/bolero-trompette.pdf" } },
          { titre: "Sleight Ride", image: "/public/images/noel.jpg", partitions: { "Clarinette 1": "/public/partitions/bolero-clarinette.pdf", "Trompette 1": "/public/partitions/bolero-trompette.pdf" } },
        ]
      },
      morceauDialog: false,
      morceauSelectionne: {}
    };
  },
  methods: {
    verifyCode() {
      if (this.enteredCode === "part2025") {
        this.accessGranted = true;
        this.dialog = false;
        this.error = false;
      } else {
        this.error = true;
      }
    },
    goHome() {
      this.$router.push("/"); // Redirection vers l'accueil
    },
    openMorceau(morceau) {
      this.morceauSelectionne = morceau;
      this.morceauDialog = true;
    },
    telechargerPartition(lien) {
      window.open(lien, "_blank");
    }
  }
};
</script>

<style scoped>
/* Flou arrière-plan */
.blur {
  filter: blur(5px);
  pointer-events: none;
}

/* Styles du message d'erreur */
.error-message {
  color: red;
  font-weight: bold;
  margin-top: 5px;
}

/* Effet de tremblement */
.shake {
  animation: shake 0.3s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
}

/* Grille des partitions */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 10px;
}

.morceau {
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;
}

.morceau:hover {
  transform: scale(1.1);
}

.morceau img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Centrage des boutons */
.button-container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

/* Header et textes */
h1 {
  color: #ecf0f1;
  text-align: center;
}

p {
  text-align: center;
  color: #bdc3c7;
}
/* Images au format carré */
.morceau img {
  width: 100%;
  aspect-ratio: 1 / 1; /* Assure un format carré */
  object-fit: cover; /* Recadre sans déformer */
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
