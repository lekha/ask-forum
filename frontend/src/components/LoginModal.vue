<template>
  <transition appear name="modal">
    <div class="modal-background">
      <transition appear name="modal">
        <div class="modal">
          <span class="modal-close" @click="hideModal">&times;</span>
        <p>This is a login modal!</p>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: "LoginModal",
  methods: {
    hideModal() {
      this.$emit("hideLogin");
    },
  },
}
</script>

<style>
.modal-background {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  background-color: #666; /* fallback color */
  background-color: rgb(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
}

.modal {
  background-color: #fff;
  border: 1px solid black;
  margin: auto;
  margin-top: 100px;
  padding: 15px;
  width: 80%;
}

.modal-enter, .modal-leave-to {
  margin-top: 0;
  opacity: 0;
}

.modal-enter-active, .modal-leave-active {
  transition: all 0.5s ease;
}

.modal-close {
  color: #aaa;
  font-weight: bold;
  float: right;
}

.modal-close:focus, .modal-close:hover {
  color: #000;
  cursor: pointer;
}
</style>
