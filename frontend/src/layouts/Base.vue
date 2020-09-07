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
      <navigation-bar />
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
import NavigationBar from "@/components/NavigationBar.vue";
import UserMixin from "@/mixins/user-mixin";
import UserProfileMenu from "@/components/UserProfileMenu.vue";

export default {
  name: "Base",
  components: {
    "base-modal": BaseModal,
    "navigation-bar": NavigationBar,
    "user-profile-menu": UserProfileMenu,
  },
  mixins: [UserMixin],
  data() {
    return {
      isVisibleLogin: false,
      loginForm: LoginForm,
    }
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
