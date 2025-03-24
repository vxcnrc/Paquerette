// Importation des modules nécessaires
import { createApp } from 'vue';  // Import de la fonction `createApp` de Vue.js pour créer l'instance de l'application
import App from './App.vue';  // Import du composant racine `App.vue` qui contient toute l'application
import router from './router';  // Import du fichier de configuration de Vue Router pour gérer la navigation entre les pages
import 'vuetify/styles'  // Importation des styles globaux de Vuetify pour appliquer les styles Material Design
import { createVuetify } from 'vuetify'  // Importation de la fonction pour créer une instance Vuetify
import * as components from 'vuetify/components'  // Importation de tous les composants Vuetify que nous voulons utiliser
import * as directives from 'vuetify/directives'  // Importation de toutes les directives Vuetify (comme `v-if`, `v-show`, etc.)
import { createPinia } from 'pinia'  // Importation de `Pinia` pour la gestion de l'état global de l'application

// Création d'une instance de Vuetify avec les composants et directives
const vuetify = createVuetify({
  components,  // Nous utilisons les composants Vuetify importés
  directives,  // Nous utilisons les directives Vuetify importées
})

// Création de l'instance Pinia (gestion de l'état global)
const pinia = createPinia()  // Pinia est utilisé pour centraliser et partager les données entre les composants

// Création et montage de l'application Vue
createApp(App)  // Création de l'instance Vue avec le composant racine `App.vue`
  .use(router)  // Utilisation de Vue Router pour la navigation entre les pages
  .use(vuetify)  // Utilisation de Vuetify pour appliquer les styles et composants de Material Design
  .use(pinia)  // Utilisation de Pinia pour la gestion de l'état global
  .mount('#app');  // Montage de l'application sur l'élément HTML avec l'ID `app`
