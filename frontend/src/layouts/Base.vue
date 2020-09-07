<template>
  <div class="base">
    <base-modal
      v-if="isVisibleLogin"
      :content="loginForm"
      @hideModal="hideLogin"
    />

    <div class="header-wrapper"><div class="header">
      <h1 id="header-title">Project Name</h1>
      <form id="search-form" role="search">
        <input
          id="search-bar" type="search" placeholder="Search" aria-label="search"
        />
        <button id="search-button"><svg-icon icon="search" /></button>
      </form>

      <div v-if="user" id="header-buttons">
        <user-profile-menu />
      </div>

      <div v-else id="header-buttons">
        <button @click="showLogin">Log in</button>
        <button>Register</button>
      </div>
    </div></div>

    <div class="body">
      <div class="sidebar">
        <ul>
          <li>
            <router-link
              :to="{ name: 'Home' }"
              :class="{ exact: $route.name === 'Home'}"
            >
              Questions
            </router-link>
          </li>
          <li><a>Tags</a></li>
          <li><a>Users</a></li>
        </ul>
      </div>
      <div class="content">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="article">
          <slot name="article"></slot>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import BaseModal from "@/components/BaseModal.vue";
import LoginForm from "@/components/LoginForm.vue";
import UserProfileMenu from "@/components/UserProfileMenu.vue";

export default {
  name: "Base",
  components: {
    "base-modal": BaseModal,
    "user-profile-menu": UserProfileMenu,
  },
  data() {
    return {
      isVisibleLogin: false,
      loginForm: LoginForm,
    }
  },
  computed: {
    user() {
      return this.$cookies.get("user");
    },
  },
  methods: {
    hideLogin() {
      this.isVisibleLogin = false;
    },
    showLogin() {
      this.isVisibleLogin = true;
    },
  },
}
</script>

<style lang="scss">
@import "@/css/_variables.scss";
@import "@/css/base.scss";
</style>
