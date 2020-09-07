import App from "./App";
import SvgIcon from "@/components/SvgIcon";
import Vue from "vue";
import VueCookies from "vue-cookies";
import router from "./router";


Vue.component("svg-icon", SvgIcon)
Vue.config.productionTip = false
Vue.use(VueCookies)


new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
