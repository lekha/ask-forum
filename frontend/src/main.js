import Vue from "vue"
import VueCookies from "vue-cookies";
import App from "./App.vue"
import router from "./router"
import SvgIcon from "@/components/SvgIcon.vue"


Vue.component("svg-icon", SvgIcon)
Vue.config.productionTip = false
Vue.use(VueCookies)


new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
