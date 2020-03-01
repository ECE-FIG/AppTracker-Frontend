<template>
  <v-content>
    <br />
    <v-card class="mx-auto" width="600" height="120">
      <v-row>
        <v-col align-self="center" class="pa-0" cols="12">
          <v-avatar class="profile" color="grey" size="120">
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>
       <v-col>
          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-title class="title">{{ profile.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ profile.role }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ profile.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
       </v-col>
      </v-row>
    </v-card>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    profile: {
      name: "John Doe",
      role: "Software Engineer",
      email: "abcd1234@gmail.com",
      pic: "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
    }
  })
};
</script>

<style>
</style>