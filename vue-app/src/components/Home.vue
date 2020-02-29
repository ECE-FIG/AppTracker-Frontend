<template>
  <v-content>
    <v-carousel
    height="300"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ slide }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  </v-content>
</template>

<script>
export default {
//   created() {
//     alert("hi");
//   }
data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'Job 1',
          'Job 2',
          'Job 3',
          'Job 4',
          'Job 5',
        ],
      }
    },
};
</script>