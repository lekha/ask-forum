<template>
  <div class="tag">
    #{{ text }}
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    text: String,
  },
}
</script>

<style lang="scss">
@import "@/css/_variables.scss";

.tag {
  background-color: $primary-lighter;
  border-radius: 3px;
  display: inline-block;
  padding: 4px 8px;
}

.tag + .tag {
  margin-left: 5px;
}
</style>
