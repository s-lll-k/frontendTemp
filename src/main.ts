import { createApp } from "vue";
import store from "./store";
import router from "./router";
import "./assets/styles/main.scss";
import App from "./App.vue";

const app = createApp(App);

app.use(store).use(router).mount("#app");
