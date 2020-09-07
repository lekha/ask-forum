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

  </base-layout>
</template>

<script>
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
      numQuestions: 1000,
      questions: [
        {
          id: 0,
          title: "Question 0 title",
          description: "Question 0 description",
          tags: [
            {
              id: 0,
              text: "tag1",
            },
            {
              id: 1,
              text: "tag2",
            },
          ],
        },
        {
          id: 1,
          title: "Question 1 title",
          description: "Question 1 description",
          tags: [
            {
              id: 1,
              text: "tag2",
            },
          ],
        },
      ],
    }
  }
}
</script>

<style lang="scss">
@use "@/css/home";
</style>
