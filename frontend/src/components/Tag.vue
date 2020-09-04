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

<style>
.tag {
  background-color: var(--primary-lighter);
  border-radius: 3px;
  display: inline-block;
  padding: 4px 8px;
}

.tag + .tag {
  margin-left: 5px;
}
</style>
