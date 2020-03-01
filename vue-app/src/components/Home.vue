<template>
  <v-content>
    <v-container>
      <v-layout align-center justify-center>
        <v-card width="700">
          <v-carousel height="300" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(recommendations, i) in recommendations" :key="i" :src="recommendations.src">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">
                    <p>{{ recommendations.job }}</p>
                    <p>{{ recommendations.desc }}</p>
                    </div>
                </v-row>
            </v-carousel-item>
          </v-carousel>
          <v-list one-line>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Top Jobs</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
          </v-list>
        </v-card>
      </v-layout>
    </v-container>
    <br />
    <v-row align="center">
      <v-card class="mx-auto" width="700" tile>
        <v-list
          :disabled="disabled"
          :dense="dense"
          :two-line="twoLine"
          :three-line="threeLine"
          :shaped="shaped"
          :flat="flat"
          :subheader="subheader"
          :sub-group="subGroup"
          :nav="nav"
          :avatar="avatar"
          :rounded="rounded"
        >
          <v-subheader>Other Jobs</v-subheader>
          <v-list-item-group v-model="others" color="primary">
            <v-list-item v-for="(others, i) in others" :key="i" :inactive="inactive">
              <v-list-item-avatar v-if="avatar">
                <v-img :src="others.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="others.title"></v-list-item-title>
                <v-list-item-subtitle v-if="twoLine || threeLine" v-html="others.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>

  </v-content>
</template>

<script>
export default {
  //   created() {
  //     alert("hi");
  //   }
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      recommendations: [
        {
          job: "UT Austin",
          desc: "Undergraduate Research",
          src: 'https://brand.utexas.edu/wp-content/uploads/2017/05/Athletics_Bevo_Silhouette.svg',
        },
        {
          job: "Google",
          desc: "Software Engineer",
          src: 'https://pngimg.com/uploads/google/google_PNG19644.png',
        },
        {
          job: "Amazon",
          desc: "Software Engineer",
          src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        },
        {
          job: "NASA",
          desc: "Electrical Engineer",
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png',
        },
        {
          job: "Microsoft",
          desc: "Recruiter",
          src: 'https://ctsciencecenter.org/wp-content/uploads/2017/08/Microsoft-Logo-PNG.png',
        }

      ],
      others: [
        {
          avatar: 'https://www.stickpng.com/assets/images/5842eff2a6515b1e0ad75b0e.png',
          title: 'Taco Bell',
          subtitle: "Food Scientist",
        },
        {
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/1280px-Cisco_logo.svg.png',
          title: 'Cisco',
          subtitle: "Networking",
        },
        {
          avatar: 'https://brandguide.tamu.edu/assets/img/logos/tam-logo.png',
          title: 'Texas A&M',
          subtitle: "Teach young children",
        },
        {
          avatar: 'https://pngimg.com/uploads/mcdonalds/mcdonalds_PNG9.png',
          title: 'McDonalds',
          subtitle: "Register",
        },
        {
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/1024px-Goldman_Sachs.svg.png',
          title: 'Goldman Sachs',
          subtitle: "Data Analyst",
        },
      ],
      disabled: false,
      dense: true,
      twoLine: true,
      threeLine: false,
      shaped: false,
      flat: false,
      subheader: false,
      inactive: false,
      subGroup: false,
      nav: false,
      avatar: true,
      rounded: false,
    };
  },

};
</script>