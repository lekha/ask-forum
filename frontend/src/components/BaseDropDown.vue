<template>
  <div class="drop-down">
    <div class="drop-down-toggle" @click="toggleDropDown">
      <slot name="toggle"></slot>
    </div>
    <div
      v-if="isVisibleDropDown"
      class="drop-down-content"
      :class="{ 'drop-down-content-right':isRightAligned }"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseDropDown",
  props: {
    isRightAligned: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isVisibleDropDown: false,
    }
  },
  methods: {
    toggleDropDown() {
      this.isVisibleDropDown = !this.isVisibleDropDown;
    },
    closeDropDown(event) {
      if (!this.$el.contains(event.target)) {
        this.isVisibleDropDown = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.closeDropDown);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeDropDown);
  },
}
</script>

<style lang="scss">
.drop-down {
  position: relative;
}

.drop-down-content {
  position: absolute;
  z-index: 1;
  left: -15px;

  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 5px var(--primary-neutral);
  margin-top: 15px;
  padding: 15px;
}

.drop-down-content:first-child {
  margin-top: 0;
}

.drop-down-content-right {
  left: unset;
  right: -15px;
}
</style>
