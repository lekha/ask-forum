<template>
  <div :class="type">
    <template v-if="type == 'sidebar'" >
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
    </template>
    <template v-else>
      <ul>
        <li>
          <router-link :to="{ name: 'Home' }" :class="routeClass('Home')">
            Browse
          </router-link>
        </li>
        <li><a>Other</a></li>
      </ul>
    </template>
  </div>
</template>

<script>
import UserMixin from "@/mixins/user-mixin";

export default {
  name: "NavigationBar",
  mixins: [UserMixin],
  props: {
    type: {
      type: String,
      default: "sidebar",
    },
  },
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
@use "@/css/_variables" as _var;

.footer {
  position: fixed;
  bottom: 0;
  z-index: 1;

  background-color: _var.$primary-darker;
  box-shadow: 0 -5px 5px -5px _var.$primary-dark;
  color: #fff;
  display: none;
  height: _var.$nav-bar-width;
  justify-content: stretch;
  width: 100%;

  @include _var.respond-to(phone) {
    display: flex;
  }

  a {
    color: #fff;
  }

  a:hover, a:focus, a:active {
    color: _var.$primary-lighter;
  }
}

.footer > ul {
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    flex-basis: 0;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    text-align: center;
  }
}

.sidebar {
  grid-area: sidebar;
  padding-top: 30px;

  @include _var.respond-to(phone) {
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
    background-color: _var.$primary-light;
    color: #000;
    display: block;
  }
}

.sidebar > ul + ul {
  border-top: 1px solid _var.$primary-light;
  padding-top: 15px;
}
</style>
