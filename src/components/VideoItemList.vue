<template>
  <v-dialog v-model="dialog" max-width="60vw" max-height="20vh">
    <template v-slot:activator="{ on, attrs }">
      <div class="video-item-list" v-bind="attrs" v-on="on">
        <v-img height="100%" :src="video.image" />
        <delete-button @confirmed-deletion="deleteVideo" />
      </div>
    </template>
    <v-card min-height="60vh" height="60vh">
      <div class="video-preview">
        <div class="video-img">
          <video-play-button :video="video" />
        </div>
        <div class="video-description">
          <h5>{{ video.title }}</h5>
          <pre>{{ video.description }}</pre>
        </div>
      </div>
      <v-btn @click="close" class="close-button" fab small text>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import DeleteButton from "./DeleteButton";
import VideoPlayButton from "./VideoPlayButton";
export default {
  components: { DeleteButton, VideoPlayButton },
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    deleteVideo() {
      this.$emit("delete", this.video);
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>
