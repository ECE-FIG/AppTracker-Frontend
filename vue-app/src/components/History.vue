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
        :auto-line-width="autoLineWidth || false"
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
    type: "trend",
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