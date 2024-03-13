<script setup lang="ts">
import { watchEffect, computed } from "vue";
import StatBox from "@/components/StatBox.vue";
import { getActivity } from "@/models/activity";
import { getUserStore } from "../global/users";

const userStore = getUserStore();
const activities = getActivity();

// Debugging User Store changes
watchEffect(() => {
  console.log("Landing, User Store Changed:", userStore.users);
});

// Utility Functions
function parseDuration(duration: string) {
  const [hours, minutes] = duration.split(':').map(Number);
  return hours * 60 + minutes;
}

// Computed Properties
const totalDistance = computed(() => 
  activities.reduce((acc, activity) => acc + activity.distance, 0)
);

const totalDurationMinutes = computed(() => 
  activities.reduce((sum, { duration }) => sum + parseDuration(duration), 0)
);

const totalDuration = computed(() => {
  const hours = Math.floor(totalDurationMinutes.value / 60);
  const minutes = totalDurationMinutes.value % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
});

const avgPace = computed(() => {
  const hours = totalDurationMinutes.value / 60;
  return totalDistance.value / hours;
});

// Assuming each activity burns 100 calories per mile plus 2 calories per minute
const totalCalories = computed(() => 
  activities.reduce((total, activity) => 
    total + (activity.distance * 100) + (parseDuration(activity.duration) * 2), 
    0)
);

</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-quarter"></div>
      <div class="column">
        <StatBox
          title="Today"
          :distance="0"
          :duration="'00:00'"
          :avgPace="0"
          :calories="0"
        />
        <StatBox
          title="This Week"
          :distance="0"
          :duration="'00:00'"
          :avgPace="0"
          :calories="0"
        />
        <StatBox
          title="All Time"
          :distance="totalDistance"
          :duration="totalDuration"
          :avgPace="avgPace"
          :calories="totalCalories"
        />
      </div>
      <div class="column is-one-quarter"></div>
    </div>
  </div>
</template>


<style scoped></style>
