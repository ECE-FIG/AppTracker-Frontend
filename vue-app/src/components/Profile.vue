<template>
  <v-content>
    <v-container>
      <v-row>
        <v-col></v-col>
        <v-col align-self="center" class="pa-0" cols="4">
          <v-avatar class="profile" color="grey" size="120">
            <v-img src="https://web.ma.utexas.edu/users/mhott/Pictures/passfoto.jpg"></v-img>
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
        <v-col></v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    profile: {
      name: "Michael Hott",
      role: "Software Engineer",
      email: "abcd1234@gmail.com",
      pic: "https://web.ma.utexas.edu/users/mhott/Pictures/passfoto.jpg"
    }
  })
};
</script>

<style>
</style>