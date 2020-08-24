<template>
  <div class="base">

    <div class="header">
      <h1>Project Name</h1>
      <form id="search-form" role="search">
        <input
          id="search" type="search" placeholder="Search" aria-label="search"
        />
      </form>
      <button>Log in</button>
      <button>Register</button>
    </div>

    <div class="body">
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
export default {
  name: "Base",
}
</script>

<style src="@/css/base.css"></style>
