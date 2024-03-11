<script setup lang="ts">
import { ref } from "vue";

const isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink class="navbar-item" to="/">
        <img src="../assets/logo.svg" width="112" height="28" />
      </RouterLink>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isActive }"
        @click="toggleMenu"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isActive }"
    >
      <div class="navbar-start">
        <RouterLink to="/activity" class="navbar-item">
          My Activity
        </RouterLink>
        <RouterLink to="/statistics" class="navbar-item">
          Statistics
        </RouterLink>

        <a class="navbar-item"> Friends Activity </a>

        <a class="navbar-item"> People Search </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Admin </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> Users </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
            <a
              class="bd-tw-button button"
              data-social-network="Twitter"
              data-social-action="tweet"
              data-social-target="https://bulma.io"
              target="_blank"
              href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"
            >
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span> Tweet </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
