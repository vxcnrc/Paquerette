<template>
	<div class="galerie-container">
        <!-- Utilisation du composant GrosTitre pour afficher le titre de la galerie -->
		<GrosTitre>Galerie Photos</GrosTitre>

        <!-- Grille d'images pour afficher toutes les images de la galerie -->

		<div class="image-grid">
            <!-- v-for : on boucle sur toutes les images de la galerie -->
			<div
				v-for="(image, index) in galerie.images"
				:key="index"
				class="image-item"
				@click="openLightbox(index)"   
			>
       <!-- Lors du clic, ouvre la lightbox avec l'image correspondante -->
				<img :src="image" :alt="'Concert ' + (index + 1)" />
			</div>
		</div>

    <!-- Lightbox (Affichage en grand de l'image sélectionnée) -->
		<div v-if="lightboxIndex !== null" class="lightbox" @click.self="closeLightbox">
			<img :src="galerie.images[lightboxIndex]" alt="Image en grand" />
			
      <!-- Flèche gauche pour naviguer vers l'image précédente -->
			<button class="arrow left" @click.stop="prevImage">&#10094;</button>
			
      <!-- Flèche droite pour naviguer vers l'image suivante -->
			<button class="arrow right" @click.stop="nextImage">&#10095;</button>
		</div>
	</div>
</template>


 <!-- Import du store pour récupérer les images -->
   <!-- Import du composant GrosTitre pour le titre -->
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useGalerie } from '../store/galerie'; 

import GrosTitre from '@/components/Gros_titre.vue';

// Déclaration des variables réactives pour gérer l'état de la lightbox
const galerie = useGalerie();
const lightboxIndex = ref(null);    // Contient l'index de l'image actuellement affichée dans la lightbox

// Lors du montage du composant, on charge les images et on ajoute un écouteur pour les événements clavier
onMounted(() => {
	galerie.fetchImages();
	window.addEventListener('keydown', handleKeydown); // ✅ Ajout clavier
});

// Lors de la destruction du composant, on nettoie l'écouteur d'événements
onBeforeUnmount(() => {
	window.removeEventListener('keydown', handleKeydown); // ✅ Nettoyage
});

// Ouvre la lightbox en définissant l'image à afficher en grand
function openLightbox(index) {
	lightboxIndex.value = index;
}
// Ferme la lightbox
function closeLightbox() {
	lightboxIndex.value = null;
}
// Fonction pour passer à l'image précédente
function prevImage() {
	if (lightboxIndex.value > 0) {
		lightboxIndex.value--;// Décrémentation de l'index pour afficher l'image précédente
	}
}
// Fonction pour passer à l'image suivante
function nextImage() {
	if (lightboxIndex.value < galerie.images.length - 1) {
		lightboxIndex.value++;  // Décrémentation de l'index pour afficher l'image suivante
	}
}

// ✅ Gère les touches clavier
function handleKeydown(e) {
	if (lightboxIndex.value !== null) {// Si la lightbox est ouverte
		if (e.key === 'Escape') {// Ferme la lightbox si la touche "Échapp" est pressée
			closeLightbox();
		} else if (e.key === 'ArrowLeft') {  // Va à l'image précédente si la flèche gauche est pressée
			prevImage();
		} else if (e.key === 'ArrowRight') {// Va à l'image suivante si la flèche droite est pressée
			nextImage();
		}
	}
}
</script>

<style scoped>
/* Styles pour le conteneur de la galerie */
.galerie-container {
	padding: 0;
	margin: 0;
	width: calc(100vw - 100px); /* ✅ Rétrécit légèrement la galerie */
	overflow-x: hidden;
}
/* Styles pour la grille d'images */
.image-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 0;
	width: 100%; /* ✅ prend toute la largeur dispo */
}
/* Styles pour chaque élément d'image */
.image-item {
	width: 100%;
	aspect-ratio: 1 / 1;
	overflow: hidden;
}

.image-item img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
	border-radius: 0;
}
/* Styles pour la lightbox (affichage en grand de l'image) */
.lightbox {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
}

.lightbox img {
	max-width: 90vw;
	max-height: 90vh;
	object-fit: contain;
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
/* Styles pour les flèches de navigation */
.arrow {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: rgba(0, 0, 0, 0.5);
	color: white;
	border: none;
	font-size: 2rem;
	cursor: pointer;
	padding: 10px;
	border-radius: 50%;
	transition: background 0.3s ease;
	z-index: 1001;
}

.arrow:hover {
	background: rgba(255, 255, 255, 0.3);
}

.left {
	left: 20px;
}

.right {
	right: 20px;
}

</style>
