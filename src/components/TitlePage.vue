<template>
  <div>
    <v-container class="container">
      <v-row class="row0">
        <v-col align-self="center">
          <h1 class="title-page-text">{{ this.texts.head }}</h1>
          <h2>{{ this.texts.sub }}</h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "titlePage",
  props: {
    texts: Object,
  },
};
</script>

<style scoped>
.row0 {
  margin-top: 20vh;
}

.title-page-text {
  font-size: 5rem;
  direction: rtl;
}
</style>
