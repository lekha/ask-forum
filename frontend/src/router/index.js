import Answer from "@/views/Answer";
import Answers from "@/views/Answers";
import Home from "@/views/Home";
import Question from "@/views/Question";
import Vue from "vue";
import VueRouter from "vue-router";


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
        shortDescription: "",
      }
    },
  },
  {
    path: "/questions/:id/:shortDescription",
    component: Question,
    name: "QuestionWithFullURL",
    props: (route) => {
      const id = Number.parseInt(route.params.id, 10);
      return {
        id: Number.isNaN(id) ? 0 : id,
        shortDescription: route.params.shortDescription,
      }
    },
  },
  {
    path: "/questions/unanswered",
    name: "Answers",
    component: Answers,
  },
  {
    path: "/questions/:id/answer",
    name: "Answer",
    component: Answer,
  },
]


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})


export default router
