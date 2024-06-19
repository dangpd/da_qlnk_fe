<template>
  <div class="mloading" v-if="loading">
    <img src="@/assets/image/loading.svg" alt="Loading..." />
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "MsLoading",
  data() {
    return {
      loading: false, // Initial loading state
    };
  },
  methods: {
    show() {
      this.loading = true; // Show loading indicator
    },
    hide() {
      this.loading = false; // Hide loading indicator
    },
  },
};
</script>

<style scoped>
.mloading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999; /* Ensure it's above other content */
  background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent background */
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mloading img {
  width: 50px; /* Adjust the size of the loading icon */
  height: 50px;
}
</style>
