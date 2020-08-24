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
  background-color: #aaaaee;
  display: inline-block;
  padding: 5px;
}

.tag + .tag {
  margin-left: 5px;
}
</style>
