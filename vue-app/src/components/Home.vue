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
          <v-list-item-title>Recommended Jobs</v-list-item-title>
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
          job: "Job 1",
          desc: "jobdesc",
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          job: "Job 1",
          desc: "jobdesc",
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          job: "Job 1",
          desc: "jobdesc",
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          job: "Job 1",
          desc: "jobdesc",
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          job: "Job 1",
          desc: "jobdesc",
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        }

      ],
      others: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Job 6',
          subtitle: "Jobdesc",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Job 7',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
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
  }
};
</script>