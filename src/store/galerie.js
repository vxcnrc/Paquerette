import { defineStore } from 'pinia';  // Importation de la fonction defineStore de Pinia

// Définition du store 'galerie' avec Pinia
export const useGalerie = defineStore('galerie', {
  state: () => ({
    images: []  // Déclaration de l'état initial : un tableau d'images vide
  }),
  
  actions: {
    // Action pour récupérer les images via une requête API
    async fetchImages() {
      try {
        // Envoi d'une requête fetch pour récupérer les images depuis le backend
        const res = await fetch('/api/images');  // Récupère les images depuis l'API (ici l'endpoint '/api/images')
        const data = await res.json();  // Transformation de la réponse en JSON
        
        console.log('Images récupérées :', data);  // Affichage des images récupérées dans la console (pour déboguer)
        
        this.images = data;  // Mise à jour de l'état des images dans le store
      } catch (err) {
        // En cas d'erreur (par exemple si l'API est indisponible), on affiche l'erreur dans la console
        console.error("Erreur lors du fetch des images :", err);
      }
    }
  }
});
