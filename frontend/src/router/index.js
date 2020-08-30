import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home.vue"
import Question from "@/views/Question.vue"


Vue.use(VueRouter)


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/questions/:id",
    name: "Question",
    component: Question,
    props: (route) => {
      const id = Number.parseInt(route.params.id, 10);
      return {
        id: Number.isNaN(id) ? 0 : id,
      }
    },
  },
]


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})


export default router
