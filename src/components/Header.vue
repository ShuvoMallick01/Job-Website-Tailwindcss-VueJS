<template>
  <!-- NAVBAR & BANNER -->
  <section class="gradient sticky top-0">
    <header
      class="myContainer md:flex justify-between items-center py-3 space-y-3 md:space-y-0"
    >
      <div
        class="flex items-center gap-8 lg:space-y-0 justify-between md:justify-start"
      >
        <router-link to="/">
          <img
            src="../assets/images/logo-skyber.svg"
            class="w-28 shrink-0"
            alt=""
          />
        </router-link>

        <ul class="flex gap-6">
          <li
            v-for="menuItem in menu"
            :key="menuItem"
            class="hover:font-medium hover:text-primary transition300"
          >
            <router-link :to="menuItem.path">{{ menuItem.title }}</router-link>
          </li>
        </ul>
      </div>

      <div class="flex gap-4 flex-wrap hidden md:block">
        <router-link to="/login"
          ><button class="btn btn-outline-primary me-3">
            Sign In
          </button></router-link
        >
        <router-link to="/registration">
          <button class="btn btn-primary">Register</button></router-link
        >
      </div>
    </header>
  </section>
</template>

<script setup>
import { ref } from "vue";

// State
const menu = ref([
  {
    title: "Home",
    path: "/",
    private: false,
  },
  {
    title: "Job Post",
    path: "/jobpost",
    private: true,
  },

  {
    title: "User",
    path: "/userProfile",
    private: false,
  },
  {
    title: "Admin",
    path: "/adminProfile",
    private: false,
  },
]);
</script>
