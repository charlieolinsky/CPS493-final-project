<script setup lang="ts">
import ActivityCard from "@/components/ActivityCard.vue";
</script>

<template>
  <div class="container">
    <div>
      <h1 class="title">My Activity</h1>
      <div class="columns">
        <div class="column is-half is-offset-one-quarter media">
          <button class="button is-primary is-fullwidth">Add Workout</button>

          <ActivityCard
            name="Erica Dubie"
            handle="@ericadubie"
            description="Incline Walk Goes Crazy!"
            distance="3.5"
            duration="45"
            profilePicURL="https://bulma.io/images/placeholders/128x128.png"
            imageURL="https://bulma.io/images/placeholders/128x128.png"
            location="SUNY New Paltz"
          />
          <ActivityCard
            name="Erica Dubie"
            handle="@ericadubie"
            description="Incline Walk Goes Crazy!"
            distance="3.5"
            duration="45"
            profilePicURL="https://bulma.io/images/placeholders/128x128.png"
            imageURL="https://bulma.io/images/placeholders/128x128.png"
            location="SUNY New Paltz"
          />
          <ActivityCard
            name="Erica Dubie"
            handle="@ericadubie"
            description="Incline Walk Goes Crazy!"
            distance="3.5"
            duration="45"
            profilePicURL="https://bulma.io/images/placeholders/128x128.png"
            imageURL="https://bulma.io/images/placeholders/128x128.png"
            location="SUNY New Paltz"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
