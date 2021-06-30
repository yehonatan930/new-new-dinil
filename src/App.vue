<template>
  <v-app>
    <Welcom v-if="curerntPage === 0"></Welcom>

    <div v-for="eventIndex in 10" :key="eventIndex">
      <event
        v-if="curerntPage === eventIndex"
        :eventNum="eventIndex"
        :poemLines="poemLines[eventIndex - 1]"
        :requirePath="requirePath"
      ></event>
    </div>

    <v-bottom-navigation fixed>
      <v-btn v-if="curerntPage < poemLines.length" @click="advance"> הבא</v-btn>
      <v-btn v-if="curerntPage > 0" @click="regress">הקודם</v-btn>
      <v-btn v-if="curerntPage === poemLines.length" @click="startAgain">
        מהתחלה</v-btn
      >
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import Welcom from "./views/welcom.vue";
import event from "./components/event.vue";
import poem from "./assets/poem.json";
export default {
  components: { Welcom, event },
  data() {
    return {
      curerntPage: 0,
      poemLines: poem,
      requirePath: null,
    };
  },
  computed: {
    regexString() {
      return `^.{2}${this.curerntPage}/.+$`;
    },
  },

  methods: {
    advance() {
      this.curerntPage++;
    },
    regress() {
      this.curerntPage--;
    },
    startAgain() {
      this.curerntPage = 0;
    },
  },

  mounted() {
    this.requirePath = require.context(`./assets/images/`, true, /\.png|jpg$/);
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
  color: #2c3e50;
}
</style>
