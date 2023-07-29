<template>
  <header class="header">
    <div class="logo-container">
      <!-- SVG logo with router-link -->
      <router-link to="/" class="logo-link">
        <img src="@/assets/logo.svg" alt="Logo" class="logo-img" />
      </router-link>
    </div>

    <nav class="nav">
      <router-link to="/" :class="{ 'active': isLinkActive('/') }">Карта</router-link>
      <router-link
      to="/articles" :class="{ 'active': isLinkActive('/articles') }">Материалы</router-link>
      <router-link to="/about" :class="{ 'active': isLinkActive('/about') }">О проекте</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'TheHeader',

  setup() {
    const route = useRoute();

    const isLinkActive = (to: string) => route.path === to;

    return {
      isLinkActive,
    };
  },
});
</script>

<style>
.header {
  background-color: #1e1e1e;
  padding: 10px;
  display: flex;
  align-items: center;
}

.nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  padding: 8px 15px;
  margin: 0 10px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: red;
}

nav a.active {
  background-color: red;
}

.logo-container {
  margin-right: auto;
  display: flex;
  align-items: center;
}

.logo-link {
  text-decoration: none;
}

.logo-img {
  width: 30px;
  height: 30px;
}
</style>
