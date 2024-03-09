<script setup lang="ts">
import ActivityCard from "@/components/ActivityCard.vue";
import { type User, getUsers } from "../models/users";
import { ref } from "vue";

const users = ref([] as User[]);
users.value = getUsers();
</script>

<template>
  <div class="container">
    <div>
      <h1 class="title">My Activity</h1>
      <div class="columns">
        <div class="column is-half is-offset-one-quarter media">
          <button class="button is-primary is-fullwidth">Add Workout</button>
          <form>
            <div class="modal is-active">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">Add a Workout</p>
                  <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                  <div class="field">
                    <label class="label" for="title">Title</label>
                    <input type="text" class="input" id="title" />
                  </div>
                  <div class="field">
                    <label class="label" for="date">Date</label>
                    <input type="date" class="input" id="date" />
                  </div>
                  <div class="field">
                    <label class="label" for="duration">Duration</label>
                    <input type="text" class="input" id="duration" />
                  </div>
                  <div class="field">
                    <label class="label" for="location">Location</label>
                    <input type="text" class="input" id="location" />
                  </div>
                  <div class="field">
                    <label class="label" for="picture">Picture</label>
                    <input type="text" class="input" id="picture" />
                  </div>
                  <div class="field">
                    <label class="label" for="type">Type</label>

                    <div class="select is-fullwidth">
                      <select class="form-control" id="type">
                        <option value="" selected disabled hidden></option>
                        <option value="run">Run</option>
                        <option value="bike">Bike</option>
                        <option value="swim">Walk</option>
                        <option value="bike">Cardio</option>
                        <option value="swim">Strength</option>
                      </select>
                    </div>
                  </div>
                </section>
                <footer class="modal-card-foot">
                  <button class="button is-success">Save changes</button>
                  <button class="button">Cancel</button>
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
              :description="user.description"
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
