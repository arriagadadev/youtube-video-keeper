<template>
  <div class="video-play-button">
    <v-img @click="goToVideo" height="100%" :src="video.image">
      <div class="play-button">
        <v-icon color="#fff">mdi-play</v-icon>
      </div>
    </v-img>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToVideo() {
      this.$router.push({ name: "player", query: { v: this.video.id } });
    },
  },
};
</script>

<style lang="sass">
.video-play-button
    cursor: pointer
    height: 200px
    background-color: #000
    position: relative
    .v-image__image
        filter: opacity(0.5)
    .v-responsive__content
        display: flex
        justify-content: center
        align-items: center
    .play-button
        width: 40px
        height: 40px
        background-color: #FF0000
        border-radius: 50%
        display: flex
        justify-content: center
        align-items: center
</style>
