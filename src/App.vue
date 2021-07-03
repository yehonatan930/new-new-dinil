<template>
  <v-app>
    <v-carousel hide-delimiters height="100vh" :continuous="false">
      <v-carousel-item v-for="eventIndex in 9" :key="eventIndex">
        <TitlePage :texts="titleTexts[0]" v-if="eventIndex === 1"></TitlePage>
        <Event
          v-else
          :eventNum="eventIndex - 1"
          :poemLines="poemLines[eventIndex - 2]"
          :images="imagesByEvent[eventIndex - 1]"
        ></Event>
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
import TitlePage from "./components/TitlePage.vue";
import Event from "./components/Event.vue";
import poem from "./assets/poem.json";
export default {
  components: {
    TitlePage,
    Event,
  },
  data() {
    return {
      poemLines: poem,
      imagesByEvent: [],
      titleTexts: [
        {
          head: "ברוכים הבאים לסיפור החיים של דיניל!",
          sub: "כל הזכויות שמורות ליהונה",
        },
        {
          head:
            "אז דיניל יומולדת 19 שמח, נגמרו החרוזים אנחנו פשוט אוהבים אותך ❤️",
          sub: "",
        },
      ],
    };
  },
  computed: {},

  methods: {
    importImages(r) {
      this.imagesByEvent = [...Array(this.poemLines.length + 1).keys()].map(
        (index) => {
          const regex = new RegExp(`^.{2}${index}/.+$`);
          return r
            .keys()
            .filter((path) => regex.test(path))
            .map((path) => r(path));
        }
      );
    },

    addImagesToLastEvent(r) {
      const randomPathsBeforeLastEvent = r
        .keys()
        .filter((path) => path.slice(2, 3) < this.poemLines.length)
        .sort(() => 0.5 - Math.random())
        .map((path) => r(path));

      console.log(this.poemLines.length);

      this.imagesByEvent[this.poemLines.length] = this.imagesByEvent[
        this.poemLines.length
      ].concat(randomPathsBeforeLastEvent);
    },
  },

  mounted() {
    const requireFunction = require.context(
      `./assets/images/`,
      true,
      /\.png|jpg$/
    );

    this.importImages(requireFunction);
    this.addImagesToLastEvent(requireFunction);
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
  background-image: url("./assets/images/backs/back0.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.vgs {
  width: 50% !important;
  left: 25% !important;
}

.v-window {
  /* overflow-y: scroll !important; */
}
</style>
