<template>
	<div class="galerie-container">
		<GrosTitre>Galerie Photos</GrosTitre>
		<div class="image-grid">
			<div
				v-for="(image, index) in galerie.images"
				:key="index"
				class="image-item"
				@click="openLightbox(index)"
			>
				<img :src="image" :alt="'Concert ' + (index + 1)" />
			</div>
		</div>

		<!-- Lightbox -->
		<div v-if="lightboxIndex !== null" class="lightbox" @click.self="closeLightbox">
			<img :src="galerie.images[lightboxIndex]" alt="Image en grand" />
			
			<!-- Flèche gauche -->
			<button class="arrow left" @click.stop="prevImage">&#10094;</button>
			
			<!-- Flèche droite -->
			<button class="arrow right" @click.stop="nextImage">&#10095;</button>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useGalerie } from '../store/galerie';
import GrosTitre from '@/components/Gros_titre.vue';

const galerie = useGalerie();
const lightboxIndex = ref(null);

onMounted(() => {
	galerie.fetchImages();
	window.addEventListener('keydown', handleKeydown); // ✅ Ajout clavier
});

onBeforeUnmount(() => {
	window.removeEventListener('keydown', handleKeydown); // ✅ Nettoyage
});

function openLightbox(index) {
	lightboxIndex.value = index;
}

function closeLightbox() {
	lightboxIndex.value = null;
}

function prevImage() {
	if (lightboxIndex.value > 0) {
		lightboxIndex.value--;
	}
}

function nextImage() {
	if (lightboxIndex.value < galerie.images.length - 1) {
		lightboxIndex.value++;
	}
}

// ✅ Gère les touches clavier
function handleKeydown(e) {
	if (lightboxIndex.value !== null) {
		if (e.key === 'Escape') {
			closeLightbox();
		} else if (e.key === 'ArrowLeft') {
			prevImage();
		} else if (e.key === 'ArrowRight') {
			nextImage();
		}
	}
}

</script>

<style scoped>
.galerie-container {
	padding: 0;
	margin: 0;
	width: calc(100vw - 100px); /* ✅ Rétrécit légèrement la galerie */
	overflow-x: hidden;
}

.image-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 0;
	width: 100%; /* ✅ prend toute la largeur dispo */
}

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
