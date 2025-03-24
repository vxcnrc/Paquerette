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
            type="password"
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
          <!-- Filtre par instrument -->
          <v-select
            v-model="instrumentSelectionne"
            :items="instrumentsDisponibles"
            label="Filtrer par instrument"
            clearable
          ></v-select>

          <div class="grid">
            <div v-for="(morceau, index) in partitionsFiltrees.orchestre" :key="index" class="morceau">
              <div v-for="(partition, instrument) in morceau.partitions" :key="instrument">
                <div v-if="instrument.toLowerCase().includes(instrumentSelectionne?.toLowerCase())">
                  <img :src="morceau.image" :alt="morceau.titre" @click="openMorceau(morceau, instrument)">
                  <p>{{ morceau.titre }} - {{ instrument }}</p>
                </div>
              </div>
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
import { useSiteStore } from '../store/site';

export default {
  name: "EspaceAdherents",
  data() {
    return {
      accessGranted: false,  // Contrôle l'accès à l'espace adhérents
      dialog: true,  // Contrôle l'affichage de la fenêtre modale de connexion
      enteredCode: "",  // Code d'accès saisi par l'utilisateur
      siteStore: useSiteStore(),  // Utilisation du store Pinia pour accéder aux partitions
      error: false,  // Indicateur d'erreur pour le code d'accès
      morceauDialog: false,  // Affiche le dialogue pour choisir l'instrument d'une partition
      morceauSelectionne: {},  // Contient le morceau sélectionné pour l'instrument
      instrumentSelectionne: null  // Instrument sélectionné pour filtrer les partitions
    };
  },
  computed: {
    partitions() {
      return this.siteStore.partitions;  // Accède aux partitions depuis le store Pinia
    },
    instrumentsDisponibles() {
      const instruments = new Set();
      // Récupère les instruments dans les partitions de l'orchestre
      this.siteStore.partitions.orchestre.forEach(morceau => {
        Object.keys(morceau.partitions).forEach(instr => {
          const instrumentPrincipal = instr.split(' ')[0];  // Sépare par espace et récupère la première partie
          instruments.add(instrumentPrincipal);  // Ajoute l'instrument sans numéro
        });
      });
      return Array.from(instruments);  // Retourne un tableau d'instruments uniques
    },
    partitionsFiltrees() {
      if (!this.instrumentSelectionne) return { chorale: this.partitions.chorale, orchestre: this.partitions.orchestre };
      return {
        chorale: this.partitions.chorale, // Ne pas filtrer la chorale
        orchestre: this.partitions.orchestre.filter(morceau => 
          Object.keys(morceau.partitions).some(instr => instr.split(' ')[0].toLowerCase().includes(this.instrumentSelectionne.toLowerCase()))
        )  // Filtre les partitions de l'orchestre par instrument
      };
    }
  },
  methods: {
    verifyCode() {
      if (this.enteredCode === "part2025") {
        this.accessGranted = true;  // L'accès est accordé si le code est correct
        this.dialog = false;  // Ferme la fenêtre modale
        this.error = false;  // Réinitialise l'erreur
      } else {
        this.error = true;  // Affiche un message d'erreur si le code est incorrect
      }
    },
    goHome() {
      this.$router.push("/");  // Redirige vers la page d'accueil
    },
    openMorceau(morceau, instrument) {
      // Trouve le lien de la partition spécifique à l'instrument
      const lien = morceau.partitions[instrument];
      this.telechargerPartition(lien);  // Lance le téléchargement de la partition
    },
    telechargerPartition(lien) {
      window.open(lien, "_blank");  // Ouvre la partition dans un nouvel onglet
    },
    isInstrumentMatch(instrument) {
      // Vérifie si l'instrument correspond exactement à celui sélectionné
      return instrument.split(' ')[0].toLowerCase() === this.instrumentSelectionne.toLowerCase();
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
  color: #ee9bff;
  font-size: 3rem;
  text-align: center;
}

p {
  text-align: center;
  color: #bdc3c7;
}
/* Images au format carré */
/* Grille des partitions avec un affichage fluide */
/* Grille des partitions avec un affichage fluide */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Flexible, ajustable en fonction de la taille de l'écran */
  gap: 20px;
  margin-top: 10px;
  justify-items: center; /* Centrer les éléments horizontalement */
}

/* Grille d'images et de textes de partitions */
.morceau {
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;
  width: 100%; /* Assurez-vous que l'élément prend toute la largeur disponible */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.morceau img {
  width: 100%;
  aspect-ratio: 1 / 1; /* Format carré pour les images */
  object-fit: cover; /* Recadrage sans déformation */
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out; /* Transition douce pour l'effet de zoom */
}

/* Applique l'effet de zoom uniquement à l'image au survol */
.morceau img:hover {
  transform: scale(1.1); /* Agrandissement de l'image */
}
</style>
