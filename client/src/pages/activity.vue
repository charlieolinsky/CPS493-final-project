<script setup lang="ts">
import ActivityCard from "@/components/ActivityCard.vue";
import { type User, getUsers } from "../models/users";
import { ref } from "vue";

const users = ref([] as User[]);
users.value = getUsers();

const formIsOpen = ref(false);

const workout = ref({
  title: "",
  date: "",
  duration: "",
  location: "",
  picture: "",
  type: "",
});

const handleToggleForm = () => {
  formIsOpen.value = !formIsOpen.value;
};

const handleAddWorkout = () => {
  //Add new workout card to the top of the list
  users.value.unshift({
    name: "PLACEHOLDER",
    username: "placeholder",
    profilePicURL: "",
    title: workout.value.title,
    distance: "0",
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

  //Close form
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
            v-for="(user, index) in users"
            :key="index"
          >
            <ActivityCard
              :name="user.name"
              :username="user.username"
              :title="user.title"
              :distance="user.distance"
              :duration="user.duration"
              :profilePicURL="user.profilePicURL"
              :imageURL="user.imageURL"
              :location="user.location"
              :timePosted="user.timePosted"
            ></ActivityCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
