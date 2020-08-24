<template>
  <base-layout>

    <template v-slot:title>
      <div class="container">
        <h2>{{ title }}</h2>
        <button>Ask a question</button>
      </div>
      <div>Asked {{ createdDate }}</div>
    </template>

    <template v-slot:article>
      <p>{{ description }}</p>
      <div>
        <div v-for="tag in tags" :key="tag.id" class="tag">
          #{{ tag.text }}
        </div>
      </div>
    </template>

  </base-layout>
</template>

<script>
import Base from "@/layouts/Base.vue";

export default {
  name: "Question",
  components: {
    "base-layout": Base,
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
