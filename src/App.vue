<template>
  <v-app>
    <v-carousel hide-delimiters height="100vh">
      <v-carousel-item v-for="eventIndex in 10" :key="eventIndex">
        <Welcom v-if="eventIndex === 1"></Welcom>
        <event
          v-else
          :eventNum="eventIndex - 1"
          :poemLines="poemLines[eventIndex - 2]"
          :images="imagesByEvent[eventIndex - 1]"
        ></event>
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
import Welcom from "./views/welcom.vue";
import event from "./components/event.vue";
import poem from "./assets/poem.json";
export default {
  components: {
    Welcom,
    event,
  },
  data() {
    return {
      curerntPage: 0,
      poemLines: poem,
      imagesByEvent: [],
    };
  },
  computed: {},

  methods: {
    importImages(r) {
      this.imagesByEvent = [...Array(this.poemLines.length).keys()].map(
        (index) => {
          const regex = new RegExp(`^.{2}${index}/.+$`);
          return r
            .keys()
            .filter((key) =>
              index !== this.poemLines.length ? regex.test(key) : true
            )
            .map((key) => r(key));
        }
      );
    },
  },

  mounted() {
    const requireFunction = require.context(
      `./assets/images/`,
      true,
      /\.png|jpg$/
    );

    this.importImages(requireFunction);
  },
};
</script>

<style>
@font-face {
  font-family: "assistant";
  src: url("./assets/Assistant-VariableFont_wght.ttf");
}

#app {
  font-family: assistant;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d3047;
  background-image: url("./assets/images/back0.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.vgs {
  width: 50% !important;
  left: 25% !important;
}
</style>
