<template>
  <v-skeleton-loader :loading="loading" width="50vw" type="list-item-two-line">
    <div class="video-gallery">
      <video-item-list
        v-for="(video, key) in videos"
        :key="key"
        :video="video"
        @delete="remove"
      />
    </div>
  </v-skeleton-loader>
</template>

<script>
import VideoItemList from "./VideoItemList.vue";
export default {
  components: {
    VideoItemList,
  },
  props: {
    videos: {
      type: Object,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    remove(video) {
      this.$emit("remove", video);
    },
  },
};
</script>

<style lang="sass">
.video-gallery
  display: flex
  flex-wrap: wrap
  justify-content: flex-start
  width: 55vw
</style>
