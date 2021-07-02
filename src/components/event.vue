<template>
  <div>
    <v-container class="head-container">
      <v-row class="head-row">
        <v-col class="head-col" v-for="(pair, index) in poemPairs" :key="index">
          <h1 class="poem-line" v-for="line in pair" :key="line">
            {{ line }}
          </h1>
        </v-col>
      </v-row>
    </v-container>

    <v-row no-gutters id="gallery">
      <v-col v-for="(image, imageIndex) in images" :key="imageIndex">
        <img
          class="image"
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
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  props: {
    eventNum: Number,
    poemLines: Array,
    images: Array,
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
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 2px solid #ebebeb;
  width: auto;
  height: 30vh;
}

.vgs__container {
  background-color: #0000 !important;
}

#gallery {
  margin-top: 10vh;
}
</style>
