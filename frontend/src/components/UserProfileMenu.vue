<template>
  <base-drop-down :isRightAligned=true>

    <template v-slot:toggle>
      <button id="profile-button">
        <svg-icon icon="profile" />
      </button>
    </template>

    <template v-slot:content>
      <span id="profile-content">
        <p>Signed in as:</p>
        <h4>{{ role }}</h4>
        <button @click="logout">Log out</button>
      </span>
    </template>

  </base-drop-down>
</template>

<script>
import BaseDropDown from "@/components/BaseDropDown.vue";
import UserMixin from "@/mixins/user-mixin";

export default {
  name: "UserProfileMenu",
  components: {
    "base-drop-down": BaseDropDown,
  },
  mixins: [UserMixin],
  methods: {
    logout() {
      this.$cookies.remove("user");
      this.$router.go();
    },
  },
}
</script>

<style scoped>
h4 {
  margin-top: 5px;
  margin-bottom: 15px;
}

p {
  margin: 0;
}
</style>
