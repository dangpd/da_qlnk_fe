<template>
  <router-view />
</template>

<script>
import productApi from "@/js/api/productApi";
export default {
  name: "App",
  components: {},
  async created() {
    const me = this;
    // const brands = await productApi.getAll();
    // console.log("All news:", brands);
  },
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
