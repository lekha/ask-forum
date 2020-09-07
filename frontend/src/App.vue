<template>
  <div id="app">
    <svg-sprite />
    <router-view />
  </div>
</template>

<script>
import SvgSprite from "@/components/SvgSprite";

export default {
  name: "App",
  components: {
    SvgSprite,
  },
}
</script>
