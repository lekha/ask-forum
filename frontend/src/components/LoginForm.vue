<template>
  <form @submit="login">
    <fieldset>
      <legend>
        Role:
        <span
          v-show="hasAttemptedSubmit && !isValidRole" class="invalid-field"
        >
          Role is required.
        </span>
      </legend>
      <div>
        <input
          type="radio" v-model="role" id="login-role-user" value="user" required
        />
        <label for="login-role-user">User</label>
      </div>
      <div>
        <input
          type="radio" v-model="role" id="login-role-editor" value="editor"
          required
        />
        <label for="login-role-editor">Editor</label>
      </div>
      <div>
        <input
          type="radio" v-model="role" id="login-role-admin" value="admin"
          required
        />
        <label for="login-role-admin">Admin</label>
      </div>
    </fieldset>
    <button type="submit" :disabled="hasSubmitted">Login</button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      hasAttemptedSubmit: false,
      hasSubmitted: false,
      role: null,
    }
  },
  computed: {
    isValidForm: function() {
      return this.isValidRole;
    },
    isValidRole: function() {
      return this.role != null;
    },
  },
  methods: {
    login(event) {
      this.hasAttemptedSubmit = true;
      if (!this.isValidForm) {
        event.preventDefault();
      }
      else {
        this.hasSubmitted = true;
        this.$cookies.set("user", { role: this.role });
      }
    },
  },
}
</script>

<style scoped>
fieldset {
  display: inline-block;
}

.invalid-field {
  color: red;
  font-size: 0.8rem;
}

button[type="submit"] {
  display: block;
  margin-top: 15px;
}
</style>
