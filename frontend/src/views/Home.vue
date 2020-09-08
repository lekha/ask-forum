<template>
  <base-layout>

    <template v-slot:title>
      <div class="container">
        <h2>Questions</h2>
        <ask-question-button />
      </div>
      <div>{{ numQuestions.toLocaleString() }} questions</div>
    </template>

    <template v-slot:article>
      <template v-if="isPageReady">
        <div v-for="question in questions" :key="question.id" class="question">
          <h3>
            <router-link
              :to="{ name: 'Question', params: { id: question.id } }"
            >
              {{ question.title }}
            </router-link>
          </h3>
          <p>{{ question.description }}</p>
          <tag v-for="tag in question.tags" :key="tag.id" :text="tag.text" />
        </div>
      </template>
      <div v-else class="question">
        <loading-icon />
      </div>
    </template>

  </base-layout>
</template>

<script>
import { api } from "@/api";
import AskQuestionButton from "@/components/AskQuestionButton";
import Base from "@/layouts/Base";
import Tag from "@/components/Tag";

export default {
  name: "Home",
  components: {
    "ask-question-button": AskQuestionButton,
    "base-layout": Base,
    "tag": Tag,
  },
  data() {
    return {
      isPageReady: false,
      numQuestions: 1000,
      questions: [],
    }
  },
  created() {
    api.listQuestions().then((response) => {
      this.questions = response;
      this.isPageReady = true;
    });
  },
}
</script>

<style lang="scss">
@use "@/css/home";
</style>
