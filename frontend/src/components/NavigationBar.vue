<template>
  <div class="sidebar">
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }" :class="routeClass('Home')">
          Questions
        </router-link>
      </li>
      <li><a>Tags</a></li>
      <li><a>Users</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  methods: {
    routeClass(name) {
      return {
        exact: this.$route.name === name,
      }
    },
  },
}
</script>

<style lang="scss">
@import "@/css/_variables.scss";

.sidebar {
  padding-top: 30px;

  @include gutters(8, $right-only: true);
  width: grid-width(2, 8);

  @include respond-to(phone) {
    display: none;
  }
}

.sidebar > ul {
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
  }

  li > * {
    display: block;
    padding: 15px 30px;
  }

  .router-link-active.exact {
    background-color: $primary-light;
    color: #000;
    display: block;
  }
}
</style>
