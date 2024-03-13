<script setup lang="ts">
import { computed } from "vue";
import StatBox from "@/components/StatBox.vue";
import { getActivity } from "@/models/activity";
import { getUserStore } from "../global/users";
import { isToday, isThisWeek, parseISO } from "date-fns";

const userStore = getUserStore();
const activities = getActivity();

// Utility Functions

//Caclulate the duration in minutes
function parseDuration(duration: string) {
  const [hours, minutes] = duration.split(":").map(Number);
  return hours * 60 + minutes;
}

//Format the duration in HH:MM format
function formatDuration(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
}

// Filters for Day and Week
const todayActivities = activities.filter((activity) =>
  isToday(parseISO(activity.date))
);
const thisWeekActivities = activities.filter((activity) =>
  isThisWeek(parseISO(activity.date), { weekStartsOn: 1 })
);

// Computed Properties for All Time
const totalDistanceAllTime = computed(() =>
  activities.reduce((acc, activity) => acc + activity.distance, 0)
);
const totalDurationMinutesAllTime = computed(() =>
  activities.reduce(
    (sum, activity) => sum + parseDuration(activity.duration),
    0
  )
);
const totalCaloriesAllTime = computed(() =>
  activities.reduce(
    (total, activity) =>
      total + activity.distance * 100 + parseDuration(activity.duration) * 2,
    0
  )
);

// Computed Properties for Today
const totalDistanceToday = computed(() =>
  todayActivities.reduce((acc, activity) => acc + activity.distance, 0)
);
const totalDurationMinutesToday = computed(() =>
  todayActivities.reduce(
    (sum, activity) => sum + parseDuration(activity.duration),
    0
  )
);
const totalCaloriesToday = computed(() =>
  todayActivities.reduce(
    (total, activity) =>
      total + activity.distance * 100 + parseDuration(activity.duration) * 2,
    0
  )
);

// Computed Properties for This Week
const totalDistanceThisWeek = computed(() =>
  thisWeekActivities.reduce((acc, activity) => acc + activity.distance, 0)
);
const totalDurationMinutesThisWeek = computed(() =>
  thisWeekActivities.reduce(
    (sum, activity) => sum + parseDuration(activity.duration),
    0
  )
);
const totalCaloriesThisWeek = computed(() =>
  thisWeekActivities.reduce(
    (total, activity) =>
      total + activity.distance * 100 + parseDuration(activity.duration) * 2,
    0
  )
);

// Calculate the average pace
const avgPace = (durationMinutes: number, distance: number) => {
  const hours = durationMinutes / 60;
  return Number((distance / hours).toFixed(2));
};
</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-quarter"></div>
      <div class="column">
        <StatBox
          title="Today"
          :distance="totalDistanceToday"
          :duration="formatDuration(totalDurationMinutesToday)"
          :avgPace="avgPace(totalDurationMinutesToday, totalDistanceToday)"
          :calories="totalCaloriesToday"
        />
        <StatBox
          title="This Week"
          :distance="totalDistanceThisWeek"
          :duration="formatDuration(totalDurationMinutesThisWeek)"
          :avgPace="
            avgPace(totalDurationMinutesThisWeek, totalDistanceThisWeek)
          "
          :calories="totalCaloriesThisWeek"
        />
        <StatBox
          title="All Time"
          :distance="totalDistanceAllTime"
          :duration="formatDuration(totalDurationMinutesAllTime)"
          :avgPace="avgPace(totalDurationMinutesAllTime, totalDistanceAllTime)"
          :calories="totalCaloriesAllTime"
        />
      </div>
      <div class="column is-one-quarter"></div>
    </div>
  </div>
</template>

<style scoped></style>
