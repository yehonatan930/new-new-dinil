<template>
  <div>
    <v-container class="head-container">
      <v-row justify="space-around">
        <div v-for="pair in poemPairs" :key="pair">
          <h1 class="poem-line" v-for="line in pair" :key="line">
            {{ line }}
          </h1>
        </div>
      </v-row>
    </v-container>

    <img
      class="image"
      v-for="(image, imageIndex) in images"
      :src="image"
      :key="imageIndex"
      @click="currentImageIndex = imageIndex"
    />

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
    requirePath: Function,
  },

  components: {
    VueGallerySlideshow,
  },

  data() {
    return {
      currentImageIndex: null,
      images: null,
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

  created() {
    this.importImages(this.requirePath);
  },

  methods: {
    importImages(r) {
      const regex = new RegExp(`^.{2}${this.eventNum}/.+$`);
      this.images = r
        .keys()
        .filter((key) => (this.eventNum !== 10 ? regex.test(key) : true))
        .map((key) => r(key));
    },
  },
};
</script>

<style>
.head-container {
  margin-top: 5vh;
  margin-bottom: 5vh;
  direction: rtl;
}
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 2px solid #ebebeb;
  margin: 5px;
  width: 10vw;
  height: auto;
}

.gallery-scroll {
  overflow-y: scroll;
}

.vgs__container {
  background-color: #0000 !important;
}

.poem-line {
}
</style>
