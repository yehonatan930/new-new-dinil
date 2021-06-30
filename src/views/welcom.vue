<template>
  <div>
    <v-container class="container">
      <v-row class="row0">
        <v-col align-self="center">
          <h1 class="welcome-text">ברוכים הבאים לסיפור החיים של דיניל!</h1>
          <h2>כל הזכויות שמורות ליהונה</h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "welcome",
};
</script>

<style scoped>
.row0 {
  margin-top: 20vh;
}

.welcome-text {
  font-size: 5rem;
  direction: rtl;
}
</style>
