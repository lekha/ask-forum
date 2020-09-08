<template>
  <base-layout>

    <template v-slot:title>
      <div class="container">
        <h2 v-if="isPageReady">{{ question.title }}</h2>
        <ask-question-button />
      </div>
      <div v-if="isPageReady">Asked {{ question.createdDate }}</div>
    </template>

    <template v-slot:article>
      <div class="question">
        <template v-if="isPageReady">
          <p>{{ question.description }}</p>
          <tag v-for="tag in question.tags" :key="tag.id" :text="tag.text" />
        </template>
        <loading-icon v-else />
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

  name: "Question",

  components: {
    "ask-question-button": AskQuestionButton,
    "base-layout": Base,
    "tag": Tag,
  },

  props: {
    id: Number,
    shortDescription: String,
  },

  data() {
    return {
      question: null,
      isPageReady: false,
    }
  },

  created() {
    api.getQuestion(this.id).then((response) => {
      this.question = response;
      this.addShortDescriptionToURL();
      this.isPageReady = true;
    });
  },

  methods: {
    addShortDescriptionToURL() {
      const maxURLLength = 300;  // arbitrarily chosen
      const expectedDescription =
        this.convertToKebabCase(this.question.title).substring(0, maxURLLength);
      if (this.shortDescription != expectedDescription) {
        this.$router.replace({
          name: "QuestionWithFullURL",
          params: { id: this.id, shortDescription: expectedDescription },
        });
      }
    },

    convertToKebabCase(inputString) {
      // Shamelessly borrowed and adapted from here:
      // https://gist.github.com/thevangelist/8ff91bac947018c9f3bfaad6487fa149
      return inputString
        .replace(/([a-z])([A-Z])/g, "$1-$2")  // prepend hyphen to capital letters
        .replace(/[^\w\s-]+/g, "")            // remove "special" characters
        .replace(/[\s_]+/g, "-")              // spaces/underscores --> hyphens
        .toLowerCase()                        // lower case
    },
  },
}
</script>
