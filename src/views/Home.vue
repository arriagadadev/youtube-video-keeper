<template>
  <div class="layout">
    <link-adder @new-video="addVideo" @error="handleError" />
    <video-gallery :videos="videos" :loading="loading" @remove="removeVideo" />

    <v-snackbar :color="snackbar.type" v-model="snackbar.show">
      {{ snackbar.message }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.show = false">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import LinkAdder from "@/components/LinkAdder";
import VideoGallery from "@/components/VideoGallery";
import API from "@/services/lambda.api";

export default {
  name: "HomePage",
  components: {
    LinkAdder,
    VideoGallery,
  },
  data: () => ({
    snackbar: {
      show: false,
      message: "",
      type: "success",
    },
    videos: {},
    loading: false,
  }),
  methods: {
    removeVideo(video) {
      API.deleteVideo(video.id)
        .then(() => {
          this.showSnackbar("Video removido");
          this.$delete(this.videos, video.id);
        })
        .catch((err) => {
          this.handleError("Ha ocurrido un error inesperado");
          console.log(err);
        });
    },
    addVideo(videoInfo) {
      if (!videoInfo) {
        this.handleError("Lo sentimos, este video no existe");
        return;
      }
      const video = {
        id: videoInfo.id,
        title: videoInfo.snippet.title,
        image: videoInfo.snippet.thumbnails.high.url,
        url: `https://youtube.com/watch?v=${videoInfo.id}`,
        description: videoInfo.snippet.description,
      };
      if (this.videos[videoInfo.id]) {
        this.showSnackbar(
          "Este video ya se encuentra en la biblioteca",
          "info"
        );
        return;
      }
      API.addVideo(video)
        .then(() => {
          this.$set(this.videos, videoInfo.id, video);
          this.showSnackbar("El video se ha añadido");
        })
        .catch((err) => {
          this.handleError("Ha ocurrido un error inesperado");
          console.log(err);
        });
    },
    handleError(errorMessage) {
      this.showSnackbar(errorMessage, "error");
    },
    showSnackbar(message, type = "success") {
      this.snackbar.message = message;
      this.snackbar.type = type;
      this.snackbar.show = true;
    },
  },
  mounted() {
    this.loading = true;
    API.getVideos()
      .then((response) => {
        response.Items.forEach((video) => {
          this.$set(this.videos, video.id, video);
        });
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>
