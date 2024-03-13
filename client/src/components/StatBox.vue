<script setup lang="ts">
const props = defineProps<{
  title: string;
  distance: number;
  duration?: number | string;
  avgPace: number;
  calories: number;
}>();
</script>

<template>
  <div class="box has-text-success summary">
    <h2 class="title">{{ title }}</h2>
    <div class="columns is-multiline is-mobile">
      <div class="column is-half">
        <p class="value">{{ distance }} ft</p>
        <p class="caption">Distance</p>
      </div>
      <div class="column is-half">
        <p class="value">{{ duration }}</p>
        <p class="caption">Duration</p>
      </div>
      <div class="column is-half">
        <p class="value">{{ avgPace }} mph</p>
        <p class="caption">Avg Pace</p>
      </div>
      <div class="column is-half">
        <p class="value">{{ calories }}</p>
        <p class="caption">Calories</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.summary .value {
  font-size: 2.5rem; /* Adjusted for better fit */
  font-weight: 700;
}
.summary .caption {
  font-size: 1rem; /* Add styling for caption */
}
</style>
