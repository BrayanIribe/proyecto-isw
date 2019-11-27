import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import routes from "./routes";
import NavBar from "./components/NavBar";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import Biography from "./components/Biography";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronUp,
  faChevronRight,
  faCheck,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./assets/styles.scss";

Vue.config.productionTip = false;
Vue.prototype.$routes = routes;
Vue.use(BootstrapVue);

library.add(faChevronUp);
library.add(faChevronRight);
library.add(faCheck);
library.add(faTimes);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.component("Quiz", Quiz);
Vue.component("NavBar", NavBar);
Vue.component("Footer", Footer);
Vue.component("Biography", Biography);

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
