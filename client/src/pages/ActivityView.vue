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
