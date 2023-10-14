<template>
    <!-- #7.a Event Handling: Listening to Events [v-on:click] Inline Handlers-->
    <div>
        <h2>Event Handling: Inline Handlers</h2>
        <button @click="sayHello">Click me</button>
    </div>

    <!-- #7.b Event Handling: Listening to Events [v-on:click] Method Handlers-->
    <div>
        <h2>Event Handling: Method Handlers</h2>
        <button @click="handleButtonClick">Click me</button>
    </div>
</template>
  
<script>
export default {
    methods: {
        sayHello() {
            alert('Hello, Vue!');
        },
        handleButtonClick() {
            this.sayHello();
        },
    },
};
</script>
  