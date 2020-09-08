<template>
  <base-layout>

    <template v-slot:title>
      <h2>Answer</h2>
    </template>

    <template v-slot:article>
      <p>Content here</p>
    </template>

  </base-layout>
</template>

<script>
import Base from "@/layouts/Base";

export default {
  name: "Answer",

  components: {
    "base-layout": Base,
  },
}
</script>
