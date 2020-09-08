export default {
  data() {
    return {
      user: this.$cookies.get("user"),
    }
  },

  computed: {
    role() {
      return (this.user ? this.user.role : null);
    },

    roleCanEdit() {
      return ["editor", "admin"].includes(this.role);
    },

    roleCanPublish() {
      return this.role === "admin";
    },
  },
}
