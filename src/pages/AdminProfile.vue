<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainerFuild mb-16 mt-20">
    <div class="py-8 text-center">
      <h1 class="sectionHeading">ADMIN PROFILE</h1>
    </div>

    <div class="grid grid-cols-3 gap-3 md:gap-6 lg:gap-10">
      <!-- LEFT -->
      <ProfileNavBar
        :profileInfo="adminInfo"
        :profileNavList="userNavList"
        :activeNav="activeNav"
      ></ProfileNavBar>

      <!-- RIGHT -->
      <div
        class="col-span-3 md:col-span-2 border py-7 px-8 lg:px-8 xl:px-10 rounded-lg bg-white dark:bg-gray-900 dark:border-slate-700"
      >
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<!-- Functinality -->
<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import ProfileNavBar from "../components/ProfileNavBar.vue";

const route = useRoute();

// State
const userNavList = ref([
  {
    title: "Profile",
    icon: "icon-default-user",
    path: "/admin-profile/profile",
    id: 1,
  },
  {
    title: "Post A New Job",
    icon: "icon-send",
    path: "/admin-profile/post-new-job",
    id: 2,
  },
  {
    title: "Manage Jobs",
    icon: "icon-briefcase ",
    path: "/admin-profile/manage-jobs",
    id: 3,
  },
  {
    title: "All Applicants",
    icon: "icon-file ",
    path: "/admin-profile/all-applicants",
    id: 4,
  },
  {
    title: "Shortlisted Resumes",
    icon: "icon-bookmark-default  ",
    path: "/admin-profile/short-listed-resumes",
    id: 5,
  },
  {
    title: "Messages",
    icon: "icon-mail",
    path: "/admin-profile/messages",
    id: 6,
  },
  {
    title: "Resume Alerts",
    icon: "icon-alerm-default ",
    path: "/admin-profile/resume-alert",
    id: 7,
  },
  {
    title: "Change Password",
    icon: "icon-security",
    path: "/admin-profile/change-password",
    id: 8,
  },
  {
    title: "Logout",
    icon: "icon-logout ",
    path: "",
    id: 9,
  },
  {
    title: "Delete Profile",
    icon: "icon-trash ",
    path: "",
    id: 10,
  },
]);

const adminInfo = ref({
  id: 1,
  name: "Nabed Khan",
  designation: "Administrator",
  role: "user",
  image: "../src/assets/images/user-profile-pic-2.jpg",
});

// Computed Function
const activeNav = computed(() => {
  return route.path;
});
</script>
