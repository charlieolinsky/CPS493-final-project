<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps({
  name: String,
  username: String,
  profilePicURL: String,
  title: String,
  distance: String,
  duration: String,
  location: String,
  imageURL: String,
  timePosted: String,
});

//General Function for showing and hiding the card
const isVisible = ref(true);
const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div class="box" v-show="isVisible">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="profilePicURL" alt="No Image" />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ name }} </strong> <small>@{{ username }} </small>
            <small class="time-posted"> {{ timePosted }} </small>
            <br />
            {{ title }} - {{ location }}
          </p>
          <div class="columns">
            <div class="column has-text-centered">
              <div class="title">
                {{ distance ? distance + " mi" : "0 mi" }}
              </div>
              <div class="heading">DISTANCE</div>
            </div>

            <div class="column has-text-centered">
              <div class="title">{{ duration ? "00:" + duration : "0:0" }}</div>
              <div class="heading">DURATION</div>
            </div>

            <div class="column has-text-centered">
              <img :src="imageURL" alt="No Image" />
            </div>
          </div>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
              <span class="icon is-small">
                <i class="fas fa-reply" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="retweet">
              <span class="icon is-small">
                <i class="fas fa-retweet" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
      <div class="media-right">
        <button @click="toggleVisibility" class="delete is-medium"></button>
      </div>
    </article>
  </div>
</template>

<style scoped>
.time-posted {
  margin-left: 10px;
}
</style>
