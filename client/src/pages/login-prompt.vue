<script setup lang="ts">
import { watchEffect } from "vue";
import { getUserStore } from "../global/users";

//DEBUG --START
const userStore = getUserStore();
watchEffect(() => {
  console.log("Login-Prompt, User Store Changed:", userStore.users);
});
//DEBUG -- END
</script>

<template>
  <div>
    <div class="container">
      <div class="hero">
        <h1 class="title">Login</h1>
        <h2 class="subtitle">
          In the meantime you can login using the login menu on the top right.
        </h2>
        <p>
          Logging in as Charles should give you access to the Activity page as
          well as the admin pages (right now just users). Logging in as other
          should give you only the Activity page
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
