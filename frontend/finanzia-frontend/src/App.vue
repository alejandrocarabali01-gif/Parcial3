<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script setup>
import Navigation from "./components/Navigation.vue"
</script>

<style>
#app {
  font-family: 'Segoe UI', sans-serif;
  background: #f5f7fa;
  min-height: 100vh;
}
</style>
