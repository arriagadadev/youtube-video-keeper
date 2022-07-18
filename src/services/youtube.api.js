import axios from "axios";

const googleApiKey = process.env.VUE_APP_GOOGLE_API_KEY;

export default {
  getVideoInformation: (id) =>
    axios
      .get("https://www.googleapis.com/youtube/v3/videos", {
        params: {
          id,
          key: googleApiKey,
          part: "snippet",
        },
      })
      .then(({ data }) => data.items[0] ?? false),
};
