<template>
  <base-layout>

    <template v-slot:title>
      <div class="container">
        <h2>{{ title }}</h2>
        <ask-question-button />
      </div>
      <div>Asked {{ createdDate }}</div>
    </template>

    <template v-slot:article>
      <p>{{ description }}</p>
      <tag v-for="tag in tags" :key="tag.id" :text="tag.text" />
    </template>

  </base-layout>
</template>

<script>
import AskQuestionButton from "@/components/AskQuestionButton.vue";
import Base from "@/layouts/Base.vue";
import Tag from "@/components/Tag.vue";

export default {
  name: "Question",
  components: {
    "ask-question-button": AskQuestionButton,
    "base-layout": Base,
    "tag": Tag,
  },
  data() {
    return {
      createdDate: "2020-08-11",
      description: "Question 1 description",
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
      title: "Question 1 title",
    }
  }
}
</script>
