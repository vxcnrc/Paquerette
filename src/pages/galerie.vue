<template>
  <div class="gallery-container">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="(image, index) in images" :key="index" :cols="getCols(image)" :md="getCols(image)">
          <v-img :src="image" class="gallery-image"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Galerie",
  data() {
    return {
      images: []
    };
  },
  mounted() {
    this.loadImages();
  },
  methods: {
    loadImages() {
      const imageCount = 20; // Ajuste selon le nombre d'images que tu as
      this.images = Array.from({ length: imageCount }, (_, i) => `/images/galerie/image${i + 1}.jpg`);
    },
    getCols(image) {
      return Math.random() > 0.5 ? 4 : 6; // Alterne pour un effet dynamique, ajuste selon le rendu
    }
  }
};
</script>

<style scoped>
.gallery-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.v-container {
  max-width: 100%;
  padding: 0;
}

.gallery-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}
</style>
