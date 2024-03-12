<script setup lang="ts">
import { type Ref, ref } from "vue";
import { getUserStore } from "../global/users";

const userStore = getUserStore();

const burgerIsActive = ref(false);
const loginIsActive = ref(false);

function toggleBurger() {
  burgerIsActive.value = !burgerIsActive.value;
}
function toggleLogin() {
  loginIsActive.value = !loginIsActive.value;
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
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{ 'is-active': burgerIsActive }"
        @click="toggleBurger"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': burgerIsActive }"
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
            <!-- Start Login Button -->
            <div class="dropdown" :class="{ 'is-active': loginIsActive }">
              <div @click="toggleLogin" class="dropdown-trigger">
                <button
                  class="button"
                  id="login-button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Login</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a
                    v-for="user in userStore.users"
                    href="#"
                    class="dropdown-item"
                  >
                    {{ user.name }}
                  </a>
                  <hr class="dropdown-divider" />
                  <a href="#" class="dropdown-item"> Other Account </a>
                </div>
              </div>
            </div>
            <!-- End Login Button -->
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
../global/store/users../global/users
