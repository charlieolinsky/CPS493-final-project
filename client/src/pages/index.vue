<script setup lang="ts">
import { watchEffect } from "vue";
import { getUserStore } from "../global/users";
import StatBox from "@/components/StatBox.vue";

//DEBUG --START
const userStore = getUserStore();
watchEffect(() => {
  console.log("Landing, User Store Changed:", userStore.users);
});
//DEBUG -- END
</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-quarter"></div>
      <div class="column">
        <StatBox
          :title="'Today'"
          :distance="0"
          :duration="0"
          :avgPace="0"
          :calories="0"
        />
        <StatBox
          :title="'This Week'"
          :distance="0"
          :duration="0"
          :avgPace="0"
          :calories="0"
        />
        <StatBox
          :title="'All Time'"
          :distance="3.8"
          :duration="2.5"
          :avgPace="1.4"
          :calories="1127.5"
        />
      </div>
      <div class="column is-one-quarter"></div>
    </div>
  </div>
</template>

<style scoped></style>
