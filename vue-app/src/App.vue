<template>
  <v-app id="app">
    <router-view />
    <Navigation></Navigation>
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
