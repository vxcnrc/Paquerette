import { createRouter, createWebHistory } from 'vue-router';
import Accueil from "./pages/accueil.vue";
import Actus from "./pages/actus.vue";
import Espace_Adherents from "./pages/espace_adherents.vue";
import Autre from "./pages/autre.vue";
import Galerie from "./pages/galerie.vue";


const routes = [
{ path: '/', component: Accueil },
{ path: '/actus', component: Actus },
{ path: '/espace_adherents', component: Espace_Adherents },
{ path: '/autre', component: Autre },
{ path: '/galerie', component: Galerie },
];
const router = createRouter({
history: createWebHistory(),
routes,
});

export default router