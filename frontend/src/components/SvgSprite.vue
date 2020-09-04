// Adapted from here:
// https://css-tricks.com/a-font-like-svg-icon-system-for-vue/
<template>
  <svg
    width="0" height="0" style="display: none" v-html="$options.sprite"
  />
</template>

<script>
const context = require.context(
  "!svg-inline-loader?" + 
  "removeTags=true" +
  "&removingTags=title" +
  "!@/assets/icons",
  true, // search subdirectories
  /\w+\.svg$/i // only include SVG files
)

const symbols = context.keys().map(path => {
  const content = context(path)
  const id = path.replace(/^\.\/(.*)\.\w+$/, "$1") // filename --> id
  return content
    .replace("<svg", `<symbol id="${id}"`)
    .replace("svg>", "symbol>")
})

export default {
  name: "SvgSprite",
  sprite: symbols.join("\n"),
}
</script>
