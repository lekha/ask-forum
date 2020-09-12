<template>
  <div class="base">
    <base-modal
      v-if="isVisibleLogin"
      :content="loginForm"
      @hideModal="hideLogin"
    />

    <div class="header-wrapper"><div class="header">
      <h1 id="header-title">Project Name</h1>
      <div id="header-buttons">
        <form id="search-form" role="search">
          <input
            id="search-bar" type="search" placeholder="Search" aria-label="search"
          />
          <button id="search-button"><svg-icon icon="search" /></button>
        </form>

        <user-profile-menu v-if="user" />

        <button v-if="!user" @click="showLogin">Log in</button>
        <button v-if="!user">Register</button>
      </div>
    </div></div>

    <navigation-bar class="footer" />
    <div class="body">
      <navigation-bar class="sidebar" />
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
import BaseModal from "@/components/BaseModal";
import LoginForm from "@/components/LoginForm";
import NavigationBar from "@/components/NavigationBar";
import UserMixin from "@/mixins/user-mixin";
import UserProfileMenu from "@/components/UserProfileMenu";

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
@use "@/css/base";
</style>
