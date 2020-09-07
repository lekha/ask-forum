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
    <ul v-if="roleCanEdit">
      <li>
        <router-link :to="{ name: 'Answers' }" :class="routeClass('Answers')">
          Answer
        </router-link>
      </li>
      <li><a>Review</a></li>
      <li v-if="roleCanPublish"><a>Publish</a></li>
    </ul>
  </div>
</template>

<script>
import UserMixin from "@/mixins/user-mixin";

export default {
  name: "NavigationBar",
  mixins: [UserMixin],
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
  padding-bottom: 15px;

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

.sidebar > ul + ul {
  border-top: 1px solid $primary-light;
  padding-top: 15px;
}
</style>
