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
    const brands = await productApi.getAll();
    console.log("All news:", brands);
    me.showToast();
  },
  mounted() {},
  methods: {
    showToast() {
      this.$toast.success("Tạo thành công");
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
