<template>
    <div>
      <h3>{{ bird.name }}</h3>
      <p>Native: {{ bird.native }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      bird: Object,
    },
  };
  </script>
  