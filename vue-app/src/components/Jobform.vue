<template>
  <v-content>
    <div>
      <v-col cols="12" sm="10">
        <v-text-field label="Company Name" v-model="companyName" :rules="rules" hide-details="auto" width="500"></v-text-field>
        <v-text-field label="Job Title" v-model="jobTitle" :rules="rules" width="500"></v-text-field>
        <v-text-field label="Location" v-model="location" width="500"></v-text-field>
        <v-text-field label="link" v-model="link" width="500"></v-text-field>
        <v-select :items="items" v-model="status" :rules="rules" label="Status" width="500"></v-select>
        <v-btn color="cyan" dark @click="submit">Submit</v-btn>
      </v-col>
    </div>
  </v-content>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    rules: [value => !!value || "Required."],
    items: ["Applied", "Interviewing", "Accepted", "Rejected"],
    companyName: "",
    jobTitle: "",
    location: "",
    link: "",
    status: ""
  }),
  methods: {
    submit() {
      console.log(this.link)
      axios
        .post("http://localhost:3000/applications", {
          companyName: this.companyName,
          jobTitle: this.jobTitle,
          location: this.location,
          link: this.link,
          status: this.status
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style >
</style>