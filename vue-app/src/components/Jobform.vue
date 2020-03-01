<template>
  <v-content>
    <div>
    <v-col cols="12" sm="10">
      <v-text-field label="Company Name" :rules="rules" hide-details="auto" width="500"></v-text-field>
      <v-text-field label="Job Title" :rules="rules" width="500"></v-text-field>
      <v-text-field label="Location" width="500"></v-text-field>
      <v-text-field label="URL" width="500"></v-text-field>
      <v-select :items="items" :rules="rules" label="Status" width="500"></v-select>
      <v-btn color="cyan" dark >Submit</v-btn>
      </v-col>
    </div>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    rules: [value => !!value || "Required."],
    items: ["Applied", "Interviewing", "Accepted", "Rejected"]
  })
};
</script>

<style >
</style>