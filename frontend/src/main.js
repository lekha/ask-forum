import App from "./App";
import LoadingIcon from "@/components/LoadingIcon";
import SvgIcon from "@/components/SvgIcon";
import Vue from "vue";
import VueCookies from "vue-cookies";
import router from "./router";


Vue.component("loading-icon", LoadingIcon)
Vue.component("svg-icon", SvgIcon)
Vue.config.productionTip = false
Vue.use(VueCookies)


new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
