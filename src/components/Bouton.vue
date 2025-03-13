<template>
    <router-link :to="to" class="custom-button">
      <slot></slot>
    </router-link>
  </template>
  
  <script setup>
  defineProps({
    to: {
      type: String,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .custom-button {
    background-color: #000000; /* Noir */
    color: #ee9bff; /* Rose clair */
    padding: 10px 20px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    font-size: 1rem;
    transition: background-color 0.3s, transform 0.2s;
    display: inline-block;
    text-align: center;
  }
  
  .custom-button:hover {
    background-color: #6e5d70;
    transform: scale(1.05);
  }
  </style>
  