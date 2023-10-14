<template>
  <div>
    <!-- 1. Template Syntax -->
    <h1>{{ title }}</h1> <!-- a. Text Interpolation -->

    <!-- #1.b. Raw HTML using v-html -->
    <div v-html="rawHtml"></div>

    <!-- #1.d. JavaScript expressions inside double curly braces -->
    <p>
      My name is <b>{{ concatenateName('John', 'Doe') }}</b>
      I love blogging about birds
    </p>

    <!-- #1.c. Attribute Bindings using v-bind -->
    <p>Let's take a look at a bird called the <strong>{{ birdName }}</strong></p>

    <!-- 2. Using a Method -->
    <p>Common sparrows can fly at speeds of approximately {{ calculateBirdSpeed(100, 2) }} km/h.</p>

    <!-- 6. List Rendering
      #6.a. v-for with an Object -->
    <div>
      <h2>Bird Speed Estimation</h2>
      <ul>
        <li v-for="bird in birds" :key="bird.name">
          <p><b>{{ bird.name }}:</b> {{ bird.speed }} km/h</p>
        </li>
      </ul>
    </div>

    <!--6 b. v-for with a Range -->
    <div>
      <h2>Looping through a Range of Numbers</h2>
      <ul>
        <li v-for="n in 5" :key="n">Item {{ n }}</li>
      </ul>
    </div>

    <!-- #6.c v-for on <template> -->
    <div>
      <h2>Types of Sparrows rendered in a template</h2>
      <ul>
        <template v-for="sparrow in sparrowTypes" :key="sparrow.id">
          <li><b>Name:</b>{{ sparrow.name }} , <b style="margin-left: 140px;">Native:</b> {{ sparrow.native }}</li>
        </template>
      </ul>
    </div>

    <!-- #6.d v-for with v-if -->
    <div>
      <h2>Sparrows Native in North america</h2>
      <ul>
        <li v-for="sparrow in sparrowTypes" :key="sparrow.name">
          <p v-if="sparrow.native === 'North america'">
            {{ sparrow.name }} (Native to North America)
          </p>
        </li>
      </ul>
    </div>

    <!-- e. v-for with a Component -->
    <div>
      <h2>Types of Sparrows (using components)</h2>
      <ul>
        <li v-for="sparrow in sparrowTypes" :key="sparrow.name">
          <BirdSpecies :bird="sparrow"></BirdSpecies>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BirdSpecies from "./BirdSpecies.vue";

export default {
  data() {
    return {
      title: "Bird Facts!",
      rawHtml: "Welcome to the bird channel, <strong>Today we are going to explore birds</strong>",
      birdName: "sparrow", // Bird's name obtained through v-bind
      sparrowTypes: [
        { name: 'House Sparrow (Passer domesticus)', native: 'global', },
        { name: 'Song Sparrow', native: 'North america', },
        { name: 'White-crowned Sparrow', native: 'North america', },
        { name: 'Chipping Sparrow', native: 'North america', },
        { name: 'Eurasian Tree Sparrow', native: 'North america', },
      ],
      birds: [
        { name: 'Sparrow', speed: '39-50' },
        { name: 'Peregrine Falcon', speed: '240' },
        { name: 'Albatross', speed: '127' },
      ],
    };
  },
  methods: {
    concatenateName(firstname, surname) {
      return `${firstname} ${surname}`;
    },
    calculateBirdSpeed(distance, time) {
      if (this.birdName.toLowerCase() === "sparrow") {
        return (distance / time).toFixed(2);
      } else {
        return "unknown"; // Speed estimation for other birds
      }
    },
  },
  components:{
    BirdSpecies
  }
};
</script>
