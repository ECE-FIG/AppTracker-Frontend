<template>
  <v-content>
    <v-layout align-center justify-center>
      <div>
        <h1>Previous Applications</h1>
      </div>
    </v-layout>
    <div>
      <v-sparkline
        :value="updateJobs"
        :labels="updateDates"
        :gradient="gradient"
        :smooth="radius || false"
        :padding="padding"
        :line-width="lineWidth"
        :stroke-linecap="lineCap"
        :gradient-direction="gradientDirection"
        :fill="fill"
        :type="type"
        :auto-line-width="autoLineWidth || true"
        auto-draw
        :show-labels="showLabels"
        color="rgba(255, 255, 255)"
        :label-size="labelSize"
      ></v-sparkline>
    </div>
    <div>
      <v-data-table :headers="headers" :items="jobHistory" :items-per-page="5" class="elevation-1"></v-data-table>
    </div>
    <br />
    <div class="text-center">
      <v-btn color="cyan" dark @click="addJob">Add Job</v-btn>
    </div>
    <br />
  </v-content>
</template>

<script>
import axios from "axios";
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"]
];

export default {
  data: () => ({
    jobsPerDate: new Object(),
    showLabels: true,
    lineWidth: 2,
    labelSize: 7,
    radius: 0,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    gradientDirection: "top",
    gradients,
    fill: false,
    type: "bar",
    autoLineWidth: false,
    headers: [
      {
        text: "Company",
        align: "start",
        sortable: true,
        value: "companyName"
      },
      { text: "Position", value: "jobTitle" },
      { text: "Location", value: "location" },
      { text: "Description", value: "link" },
      { text: "Application Date", value: "created_date" }
    ],
    jobHistory: []
    // {
    //   Company: "Facebook",
    //   Position: "Software Engineer",
    //   Location: "Austin, TX",
    //   Description: "OOP, Data Structures, Algorithms",
    //   ApplicationDate: "2/29/2020"
    // },
    // {
    //   Company: "Apple",
    //   Position: "Embedded Software Engineer",
    //   Location: "Cupertino, CA",
    //   Description: "Microcontrollers, C, Assembly",
    //   ApplicationDate: "2/29/2020"
    // },
    // {
    //   Company: "Amazon",
    //   Position: "Cloud Engineer",
    //   Location: "Seattle, WA",
    //   Description: "Cloud Computing, Networks, Distributed Systems",
    //   ApplicationDate: "2/30/2020"
    // },
    // {
    //   Company: "Netflix",
    //   Position: "Software Engineer",
    //   Location: "Austin, TX",
    //   Description: "OOP, Data Structures, Algorithms",
    //   ApplicationDate: "2/31/2020"
    // },
    // {
    //   Company: "Google",
    //   Position: "Machine Learning Engineer",
    //   Location: "Palo Alto, CA",
    //   Description: "Data Science, ML/AI",
    //   ApplicationDate: "2/31/2020"
    // }
  }),
  methods: {
    getJobs() {
      axios.get("http://localhost:3000/applications").then(response => {
        this.jobHistory = response.data;
      });
    },
    addJob() {
      this.$router.push({ name: "jobform" }).catch(() => {});
    }
  },
  computed: {
    totalJobsPerDate() {
      let jobsPerDate = {};

      this.jobHistory.forEach(object => {
        let formattedDate = object.created_date.substring(0, 10);
        jobsPerDate[formattedDate] = jobsPerDate[formattedDate] + 1 || 1;
      });

      return jobsPerDate;
    },
    updateJobs() {
      let jobCount = [];

      for (let date in this.totalJobsPerDate) {
        jobCount.push(this.totalJobsPerDate[date]);
      }

      return jobCount;
    },
    updateDates() {
      let dates = [];

      for (let date in this.totalJobsPerDate) {
        dates.push(date.substring(0, 10));
      }

      return dates;
    }
  },
  mounted: function() {
    this.getJobs();
  }
};
</script>

<style>
h1 {
  padding: 5px;
}
</style>