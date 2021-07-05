<template>
  <div>
    <v-container class="head-container" :class="{ 'bright-text': bright }">
      <v-row class="head-row">
        <v-col class="head-col" v-for="(pair, index) in poemPairs" :key="index">
          <h1 class="poem-line" v-for="line in pair" :key="line">
            {{ line }}
          </h1>
        </v-col>
      </v-row>
    </v-container>

    <div id="gallery">
      <v-row no-gutters>
        <v-col v-for="(image, imageIndex) in images" :key="imageIndex">
          <img
            class="image"
            :style="rowHeightStyle"
            :src="image"
            @click="currentImageIndex = imageIndex"
          />
        </v-col>
      </v-row>

      <vue-gallery-slideshow
        :images="images"
        :index="currentImageIndex"
        @close="currentImageIndex = null"
      ></vue-gallery-slideshow>
    </div>
  </div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  name: "Event",
  props: {
    eventNum: Number,
    poemLines: Array,
    images: Array,
    bright: Boolean,
  },

  components: {
    VueGallerySlideshow,
  },

  data() {
    return {
      currentImageIndex: null,
    };
  },

  computed: {
    poemPairs() {
      return this.poemLines.reduce(function(result, value, index, array) {
        if (index % 2 === 0) result.push(array.slice(index, index + 2));
        return result;
      }, []);
    },

    rowHeightStyle() {
      const style = {};
      style.height = this.images.length > 6 ? "30vh" : "50vh";
      return style;
    },
  },

  methods: {},
};
</script>

<style>
.head-container {
  margin-top: 5vh;
  margin-bottom: 5vh;
  direction: rtl;
  max-width: 95vw !important;
}

.bright-text {
  color: #d6ffe4;
}

.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: solid #ebebeb;
  width: auto;
}

.vgs__container {
  background-color: #0000 !important;
}

#gallery {
  margin-top: 10vh;
}
</style>
