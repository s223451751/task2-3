<template>
    <div>
      <h3>Child Component</h3>
      <button @click="emitEvent">Click me</button>
      <!-- #10.c Slots -->
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      emitEvent() {
        this.$emit("child-event", "Event emited from child component");
      },
    },
  };
  </script>
  