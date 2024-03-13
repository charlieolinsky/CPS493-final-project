<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import ActivityCard from "@/components/ActivityCard.vue";
import { type Activity, getActivity } from "../models/activity";
import { getUserStore } from "../global/users";

const userStore = getUserStore();
const users = userStore.users;

const activities = ref([] as Activity[]);
activities.value = getActivity();

const formIsOpen = ref(false);

const workout = ref({
  title: "",
  date: "",
  duration: "",
  location: "",
  picture: "",
  type: "",
});

//DEBUG --START
watchEffect(() => {
  console.log("activity, User Store Changed:", userStore.users);
});
//DEBUG -- END

const handleToggleForm = () => {
  formIsOpen.value = !formIsOpen.value;
};

const loggedInUser = computed(() => {
  return userStore.getLoggedInUser();
});

const handleAddWorkout = () => {
  if (!loggedInUser.value) {
    console.error("No logged-in user found.");
    return; // Exit the function if no logged-in user is found
  }

  console.log("Add workout for: " + loggedInUser.value.name);

  // Proceed with adding the new workout card
  activities.value.unshift({
    name: loggedInUser.value.name,
    username: loggedInUser.value.username,
    title: workout.value.title,
    distance: 0,
    duration: workout.value.duration,
    location: workout.value.location,
    imageURL: workout.value.picture,
    timePosted: "Just now",
  });

  // Clear Workout Ref (clear form)
  workout.value = {
    title: "",
    date: "",
    duration: "",
    location: "",
    picture: "",
    type: "",
  };

  // Close form
  handleToggleForm();
};
</script>

<template>
  <div class="container">
    <div>
      <h1 class="title">My Activity</h1>
      <div class="columns">
        <div class="column is-half is-offset-one-quarter media">
          <button
            class="button is-primary is-fullwidth"
            @click="handleToggleForm"
          >
            Add Workout
          </button>
          <form v-show="formIsOpen">
            <div class="modal is-active">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">Add a Workout</p>
                  <button
                    @click.prevent="handleToggleForm"
                    class="delete"
                    aria-label="close"
                  ></button>
                </header>
                <section class="modal-card-body">
                  <div class="field">
                    <label class="label" for="title">Title</label>
                    <input
                      type="text"
                      class="input"
                      id="title"
                      v-model="workout.title"
                    />
                  </div>
                  <div class="field">
                    <label class="label" for="date">Date</label>
                    <input
                      type="date"
                      class="input"
                      id="date"
                      v-model="workout.date"
                    />
                  </div>
                  <div class="field">
                    <label class="label" for="duration">Duration</label>
                    <input
                      type="text"
                      class="input"
                      id="duration"
                      v-model="workout.duration"
                    />
                  </div>
                  <div class="field">
                    <label class="label" for="location">Location</label>
                    <input
                      type="text"
                      class="input"
                      id="location"
                      v-model="workout.location"
                    />
                  </div>
                  <div class="field">
                    <label class="label" for="picture">Picture</label>
                    <input
                      type="text"
                      class="input"
                      id="picture"
                      v-model="workout.picture"
                    />
                  </div>
                  <div class="field">
                    <label class="label" for="type">Type</label>

                    <div class="select is-fullwidth">
                      <select
                        class="form-control"
                        id="type"
                        v-model="workout.type"
                      >
                        <option value="" selected disabled hidden></option>
                        <option value="run">Run</option>
                        <option value="bike">Bike</option>
                        <option value="walk">Walk</option>
                        <option value="cardio">Cardio</option>
                        <option value="strength">Strength</option>
                      </select>
                    </div>
                  </div>
                </section>
                <footer class="modal-card-foot">
                  <button
                    class="button is-success"
                    @click.prevent="handleAddWorkout"
                  >
                    Save changes
                  </button>
                  <button class="button" @click.prevent="handleToggleForm">
                    Cancel
                  </button>
                </footer>
              </div>
            </div>
          </form>

          <div
            class="activity-cards"
            v-for="(activity, index) in activities"
            :key="index"
          >
            <ActivityCard
              :name="
                users.filter((user) => user.name === activity.name)[0].name
              "
              :username="
                users.filter((user) => user.name === activity.name)[0].username
              "
              :profilePicURL="
                users.filter((user) => user.name === activity.name)[0]
                  .profilePicURL
              "
              :title="activity.title"
              :distance=activity.distance
              :duration="activity.duration"
              :imageURL="activity.imageURL"
              :location="activity.location"
              :timePosted="activity.timePosted"
            ></ActivityCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
