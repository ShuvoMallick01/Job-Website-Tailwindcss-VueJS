<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mb-16 mt-20">
    <div class="py-10 text-center">
      <h1 class="sectionHeading">USER PROFILE</h1>
    </div>

    <div class="grid grid-cols-3 gap-3 md:gap-6 lg:gap-10">
      <!-- LEFT -->
      <ProfileNavBar :profileNavList="userNavList"></ProfileNavBar>
      <!-- RIGHT -->

      <div
        class="col-span-3 md:col-span-2 border py-6 lg:px-5 px-5 rounded-lg bg-white dark:bg-gray-900 dark:border-slate-700"
      >
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProfileNavBar from "../components/ProfileNavBar.vue";
import UserAppliedJobs from "../pagesProfile/UserAppliedJobs.vue";

// State
const userNavList = ref([
  {
    title: "Profile",
    icon: "icon-default-user ",
    path: "userProfile/profile",
    id: 1,
  },
  { title: "My Resume", icon: "icon-file", path: "userProfile/profile", id: 2 },
  {
    title: "Saved Jobs",
    icon: "icon-default-user ",
    path: "userProfile/profile",
    id: 3,
  },
  {
    title: "Applied Jobs",
    icon: "icon-heart-default ",
    path: "userProfile/appliedjobs",
    id: 4,
  },
  {
    title: "Job Alerts",
    icon: "icon-alerm-default ",
    path: "userProfile/profile",
    id: 5,
  },
  {
    title: "CV Manager",
    icon: "icon-burger-3-row ",
    path: "userProfile/profile",
    id: 5,
  },
  {
    title: "Change Password",
    icon: "icon-edit ",
    path: "userProfile/profile",
    id: 6,
  },
  {
    title: "Log Out",
    icon: "icon-logout  ",
    path: "userProfile/profile",
    id: 6,
  },
]);
</script>
