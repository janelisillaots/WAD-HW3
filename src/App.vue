<template>
  <NavHeader />
  <router-view />
  <FooterSection />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
<script setup>
import NavHeader from "@/components/NavHeader.vue";
import FooterSection from "@/components/FooterSection.vue";
</script>