<template>
  <div class="video-player">
    <div>
      <v-btn @click="goToHome">
        <v-icon>mdi-arrow-u-left-top</v-icon> Volver
      </v-btn>
      <iframe
        width="1000"
        height="562"
        :src="'https://www.youtube.com/embed/' + $route.query.v"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerPage",
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="sass">
.video-player
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  flex-direction: column
  button
    display: block
    margin-bottom: 20px
</style>
