<template>
  <!-- 11. Router -->
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/reactivity-fundamentals">Reactivity</router-link> |
    <router-link to="/event-handling">Event Handling</router-link> |
    <router-link to="/form-handling">Form Handling</router-link> |
    <router-link to="/watchers">Watchers</router-link> |
    <router-link to="/components">Components</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
