<script setup lang="ts">
import ActivityCard from "../components/ActivityCard.vue";
</script>

<template>
  <div class="container">
    <div>
      <h1 class="title">My Activity</h1>
      <div class="columns">
        <div class="column is-half is-offset-one-quarter media">
          <button class="button is-primary is-fullwidth">Add Workout</button>
          <ActivityCard />
          <ActivityCard />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
