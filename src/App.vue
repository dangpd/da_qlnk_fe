<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
  async created() {},
  mounted() {},
  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Roboto;
}

@font-face {
  font-family: Roboto;
  src: url(../src/assets/fonts/Roboto-Regular.ttf);
}

html {
  scroll-behavior: smooth;
}
</style>
