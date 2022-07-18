<template>
  <div class="link-adder">
    <h2>Añadir nuevo video</h2>
    <text-field-button :loading="loading" @submit="checkLink" />
  </div>
</template>

<script>
import TextFieldButton from "./TextFieldButton";
import YoutubeLinkHandler from "@/utils/youtubeLinkHandler";
import Youtube from "@/services/youtube.api";
export default {
  name: "LinkAdder",
  components: {
    TextFieldButton,
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    checkLink(link) {
      const videoIdentifier = YoutubeLinkHandler.getVideoIdentifier(link);
      if (!videoIdentifier) {
        this.$emit(
          "error",
          "Sólo puedes ingresar links a videos de YouTube válidos"
        );
        return;
      }
      this.loading = true;
      Youtube.getVideoInformation(videoIdentifier)
        .then((videoInfo) => this.$emit("new-video", videoInfo))
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="sass">
.link-adder
  width: 62vw
  h2
    font-size: 28px
    font-weight: 500
    margin-bottom: 10px
</style>
