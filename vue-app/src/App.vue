<template>
  <v-app id="app">
    <Navigation></Navigation>
    <router-view />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>
