<template>
  <base-layout>

    <template v-slot:title>
      <h2>Page Not Found</h2>
    </template>

    <template v-slot:article>
      <p>
        This is awkward. The page you're looking for doesn't exist.
      </p>
      <p>
        Try searching for something else or returning to our <router-link
        :to="{ name: 'Home' }" :class="{ exact: $route.name === 'Home' }"> home
        page</router-link>.
      </p>
    </template>

  </base-layout>
</template>

<script>
import Base from "@/layouts/Base";

export default {
  name: "PageNotFound",

  components: {
    "base-layout": Base,
  },
}
</script>
