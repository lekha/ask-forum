<template>
  <div class="base">

    <div class="header">
      <h1>Project Name</h1>
      <form id="search-form" role="search">
        <input
          id="search" type="search" placeholder="Search" aria-label="search"
        />
      </form>
      <template v-if="role">
        <div>{{ role }}</div>
        <button @click="logout">Log out</button>
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

export default {
  name: "Base",
  components: {
      "base-modal": BaseModal,
  },
  data() {
    return {
      isVisibleLogin: false,
      loginForm: LoginForm,
    }
  },
  computed: {
    role() {
      var user = this.$cookies.get("user");
      return (user ? user.role : null);
    },
  },
  methods: {
    hideLogin() {
      this.isVisibleLogin = false;
    },
    logout() {
      console.log("logging out");
      this.$cookies.remove("user");
      this.$router.go();
    },
    showLogin() {
      this.isVisibleLogin = true;
    },
  },
}
</script>

<style src="@/css/base.css"></style>
