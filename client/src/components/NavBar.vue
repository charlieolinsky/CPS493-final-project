<script setup lang="ts">
import { ref, computed } from "vue";
import { type User, getUserStore } from "../global/users";


const userStore = getUserStore();
const burgerIsActive = ref(false);
const loginIsActive = ref(false);

function toggleBurger() {
  burgerIsActive.value = !burgerIsActive.value;
}
function toggleLoginDropdown() {
  loginIsActive.value = !loginIsActive.value;
}

function handleLogOut() {
  userStore.userLogOut();
  loginIsActive.value = false;
}

const loggedInUser = computed(() => {
  return userStore.getLoggedInUser();
  console.log("Logged In User: ", loggedInUser);
});

const isAdmin = computed(() => {
  return loggedInUser.value?.isAdmin;
});
</script>

<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
    <div class="container">
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
          <RouterLink
            v-if="loggedInUser !== undefined"
            to="/activity"
            class="navbar-item"
          >
            My Activity
          </RouterLink>
          <RouterLink v-else to="/login-prompt" class="navbar-item">
            My Activity
          </RouterLink>

          <RouterLink to="/statistics" class="navbar-item">
            Statistics
          </RouterLink>

          <RouterLink to="/friends" class="navbar-item">
            Friends Activity
          </RouterLink>

          <a class="navbar-item"> People Search </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Admin </a>

            <div class="navbar-dropdown">
              <RouterLink
                v-if="loggedInUser === undefined || !isAdmin"
                to="/login-prompt"
                class="navbar-item"
              >
                Users
              </RouterLink>
              <RouterLink v-else to="/admin-users" class="navbar-item">
                Users
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div v-if="loggedInUser !== undefined" class="profile-image">
            <figure class="image is-48x48">
              <img id="nav-profile-pic" :src="loggedInUser?.profilePicURL" />
            </figure>

            <div class="title is-5">
              {{ loggedInUser?.name }}
            </div>
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <a v-if="loggedInUser === undefined" class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <!-- Start Login Button -->
              <div
                v-if="loggedInUser === undefined"
                class="dropdown"
                :class="{ 'is-active': loginIsActive }"
              >
                <div @click="toggleLoginDropdown" class="dropdown-trigger">
                  <button
                    class="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    style="margin-right: 8px"
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
                      :key="user.id"
                      @click="userStore.userLogIn(user.name)"
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
              <div v-else class="button is-primary" @click="handleLogOut">
                <span>Log Out</span>
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
    </div>
  </nav>
</template>

<style scoped>
.profile-image {
  display: flex;
  align-items: center;
  margin-right: 8px;
}

.profile-image .title {
  margin-left: 8px;
  color: white;
}

#nav-profile-pic {
  max-height: 48px;
  max-width: 48px;
  border-radius: 10%;
}
</style>
