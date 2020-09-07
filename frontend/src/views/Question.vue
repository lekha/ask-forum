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
      <div class="question">
        <p>{{ description }}</p>
        <tag v-for="tag in tags" :key="tag.id" :text="tag.text" />
      </div>
    </template>

  </base-layout>
</template>

<script>
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
      createdDate: "2020-08-11",
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
    }
  },
  computed: {
    description() {
      return "Question " + this.id + " description";
    },
    title() {
      return "Question " + this.id + " title";
    },
  },
  created() {
    this.addShortDescriptionToURL();
  },
  methods: {
    addShortDescriptionToURL() {
      const maxURLLength = 300;  // arbitrarily chosen
      const expectedDescription =
        this.convertToKebabCase(this.title).substring(0, maxURLLength);
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
