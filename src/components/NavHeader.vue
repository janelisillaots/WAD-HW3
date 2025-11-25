<template>
  <nav>
    <router-link to="/">Main</router-link> |
    <router-link to="/signup">Signup</router-link>
  </nav>
</template>

<style scoped>
* {
  font-family: monospace;
  font-size: 17px;
  box-sizing: border-box;
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