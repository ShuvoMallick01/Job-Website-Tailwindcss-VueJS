<template>
  <!-- NAVBAR & BANNER -->
  <section class="gradient">
    <header
      class="myContainer md:flex justify-between items-center py-3 space-y-3 md:space-y-0"
    >
      <div
        class="flex items-center gap-8 lg:space-y-0 justify-between md:justify-start"
      >
        <img
          src="../assets/images/logo-skyber.svg"
          class="w-32 shrink-0"
          alt=""
        />

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
        <button class="btn btn-outline-primary me-3">Sign In</button>
        <button class="btn btn-primary">Register</button>
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
    title: "Login",
    path: "/login",
    private: false,
  },
  {
    title: "Registration",
    path: "/registration",
    private: false,
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
