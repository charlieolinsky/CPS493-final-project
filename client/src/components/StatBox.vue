<script setup lang="ts">
const props = defineProps<{
  title: string;
  distance: number;
  duration: number;
  avgPace: number;
  calories: number;
}>();
</script>

<template>
  <div class="box has-text-success summary">
    <h2 class="title">{{ title }}</h2>
    <div class="column is-multiline">
      <div class="column is-half">
        <h3 class="value">{{ distance }}</h3>
        <caption class="caption">
          Distance
        </caption>
      </div>
      <div class="column is-half">
        <h3 class="value">{{ duration }}</h3>
        <caption class="caption">
          Duration
        </caption>
      </div>
      <div class="column is-half">
        <h3 class="value">{{ avgPace }}</h3>
        <caption class="caption">
          Avg Pace
        </caption>
      </div>
      <div class="column is-half">
        <h3 class="value">{{ calories }}</h3>
        <caption class="caption">
          Calories
        </caption>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
