<template>
  <v-app id="app">
    <v-main>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <HelloWorld />
          </div>
          <div class="col">
            <HelloWorld />
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="sass">
@import 'assets/sass/app'
</style>
