// Adapted from here:
// https://css-tricks.com/a-font-like-svg-icon-system-for-vue/ 
<template>
  <svg class="icon">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
svg.icon {
  height: 1em;
  margin: 0;
  vertical-align: middle;
  width: 1em;
}
</style>
