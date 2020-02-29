<template>
  <v-content>
    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      headers: [
          {
            text: 'Company',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Name', value: 'calories' },
          { text: 'Position', value: 'fat' },
          { text: 'Location', value: 'carbs' },
          { text: 'Description', value: 'protein' },
          { text: 'Date', value: 'iron' },
        ],
      jobHistory: [
        {
        "Company": "Facebook", 
        "Position": "Software Engineer",
        "Location": "Austin, TX",
        "Description": "Someone who can code"
        },
        {
        "Company": "Amazon", 
        "Position": "Software Engineer",
        "Location": "Austin, TX",
        "Description": "Someone who can code"
        },
        {
        "Company": "Netflix", 
        "Position": "Software Engineer",
        "Location": "Austin, TX",
        "Description": "Someone who can code"
        },
        {
        "Company": "Google", 
        "Position": "Software Engineer",
        "Location": "Austin, TX",
        "Description": "Someone who can code"
        }]
    })
  };
</script>

<style>

</style>