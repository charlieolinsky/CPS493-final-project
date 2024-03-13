<script setup lang="ts">
import { watchEffect } from "vue";
import { getUserStore } from "../global/users";

//DEBUG --START
const userStore = getUserStore();
watchEffect(() => {
  console.log("Landing, User Store Changed:", userStore.users);
});
//DEBUG -- END
</script>

<template>
  <div>
    <h1>Landing Page!</h1>
  </div>
</template>

<style scoped></style>
