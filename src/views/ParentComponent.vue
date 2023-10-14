<template>
    <div>
      <h2>Parent Component</h2>
        <!-- 10. Components 
            a. Props 
            b. Events [$emit]
        -->
      <child-component @child-event="handleEvent"></child-component>
      <p>Received Data: {{ eventData }}</p>
      <p>This content is passed via slot.</p>
    </div>
  </template>
  
  <script>
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    components: {
      ChildComponent,
    },
    data() {
      return {
        eventData: '',
      };
    },
    methods: {
      handleEvent(data) {
        this.eventData = data;
      },
    },
  };
  </script>
  