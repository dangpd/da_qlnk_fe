import { createApp } from "vue";
import App from "./App.vue";
import store from "@/js/store/store";
import router from "@/router/router";

import Toast, { useToast } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
const app = createApp(App);
app.use(store);
app.use(router);

// Cấu hình vue-toastification toàn cục
const options = {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
};
app.use(Toast, options);

app.config.globalProperties.$toast = useToast();
app.mount("#app");
