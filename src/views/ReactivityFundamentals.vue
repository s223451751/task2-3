<template>
  <div>
    <h2>Reactive Input Length Counter</h2>
    <input v-model="text" placeholder="Type something..." />
    <p>The length of the input is {{ textLength }} characters</p>
  </div>

  <!-- 4. Computed properties -->
  <div>
    <p>Let us take a look at computed properties</p>
    <h2>Rectangle Calculator</h2>
    <label for="width">Width:</label>
    <input v-model="width" id="width" type="number" />
    <label for="height">Height:</label>
    <input v-model="height" id="height" type="number" />

    <p>Rectangle Width: {{ width }} units</p>
    <p>Rectangle Height: {{ height }} units</p>
    <p>Area: {{ area }} square units</p>
    <p>Perimeter: {{ perimeter }} units</p>
  </div>

  <!-- 5. Class and Style Bindings
      a. Binding HTML class [v-bind:class]
      b. Binding Inline Styles [v-bind:style] -->
  <div>
    <h2>Class Binding Example</h2>
    <button @click="toggleClass">Toggle Class</button>
    <p :class="{ active: isActive }">Button is {{ isActive ? '' : 'not' }} Active</p>
    <h2>Style Binding Example</h2>
    <div :style="{
      backgroundColor: bgColor,
      color: textColor,
      fontSize: fontSize + 'px',
    }">
      Styled Div
    </div>
  </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';

const text = ref('');
const textLength = computed(() => text.value.length);

// 4. Computed properties
const width = ref(0);
const height = ref(0);

const area = computed(() => width.value * height.value);
const perimeter = computed(() => 2 * (width.value + height.value));

const isActive = ref(false);

const toggleClass = () => {
  isActive.value = !isActive.value;
};

const bgColor = ref('lightblue');
const textColor = ref('black');
const fontSize = ref(16);
</script>

<style>
.active {
  background-color: green;
  color: white;
}
</style>
  