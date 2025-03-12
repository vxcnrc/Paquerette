<template>
    <div ref="map" class="google-map"></div>
  </template>
  
  <script>
  export default {
    props: ['latitude', 'longitude'],
    mounted() {
      const mapOptions = {
        center: { lat: this.latitude, lng: this.longitude },
        zoom: 16,
      };
      new google.maps.Map(this.$refs.map, mapOptions);
    }
  };
  </script>
  
  <style scoped>
  .google-map {
    height: 100%;
    width: 100%;
  }
  </style>
  