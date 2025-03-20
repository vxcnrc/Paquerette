import { defineStore } from 'pinia';

export const useGalerie = defineStore('galerie', {
	state: () => ({
		images: []
	}),
	actions: {
		async fetchImages() {
			try {
				const res = await fetch('/api/images'); // ou '/api/images' si proxy
				const data = await res.json();
				console.log('Images récupérées :', data); // pour debug
				this.images = data;
			} catch (err) {
				console.error("Erreur lors du fetch des images :", err);
			}
		}
	}
});
