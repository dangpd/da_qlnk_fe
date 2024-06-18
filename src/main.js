import { createApp } from "vue";
import App from "./App.vue";
import store from "@/js/store/store";
import MsLoading from '@/components/MsLoading.vue';
import router from "@/router/router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";

import Toast, { useToast } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
library.add(faUserSecret);

import vueClickOutsideElement from "vue-click-outside-element";
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
app.component("font-awesome-icon", FontAwesomeIcon);
app.component('ms-loading', MsLoading);
app.use(vueClickOutsideElement);
app.mount("#app");
