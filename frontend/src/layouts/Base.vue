<template>
  <div class="base">

    <div class="header">
      <h1>Project Name</h1>
      <form id="search-form" role="search">
        <input
          id="search-bar" type="search" placeholder="Search" aria-label="search"
        />
        <button id="search-button"><svg-icon icon="search" /></button>
      </form>

      <template v-if="user">
        <user-profile-menu />
      </template>

      <template v-else>
        <button @click="showLogin">Log in</button>
        <button>Register</button>
      </template>
    </div>

    <div class="body">
      <base-modal v-if="isVisibleLogin" :content="loginForm" @hideModal="hideLogin" />
      <div class="sidebar">
        <ul>
          <li><router-link :to="{ name: 'Home' }">Questions</router-link></li>
          <li>Tags</li>
          <li>Users</li>
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
      <div class="sidebar">
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

<style lang="scss" src="@/css/base.scss"></style>
