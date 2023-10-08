<template>
  <LayoutDashboard>
    <!-- Title -->
    <template v-slot:pageTitle>
      <h1 class="sectionHeading">USER PROFILE</h1>
    </template>

    <!-- LEFT -->
    <template v-slot:leftNavBar>
      <ProfileNavBar
        :profileInfo="userInfo"
        :profileNavList="userNavList"
        :activeNav="activeNav"
      ></ProfileNavBar>
    </template>

    <!-- RIGHT -->
    <router-view></router-view>
  </LayoutDashboard>
</template>

<!-- Functinality -->
<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import ProfileNavBar from "../components/ProfileNavBar.vue";
import LayoutDashboard from "../components/LayoutDashboard.vue";

const route = useRoute();

// State
const userNavList = ref([
  {
    title: "Profile",
    icon: "icon-default-user",
    path: "/user-profile/profile",
    id: 1,
  },
  {
    title: "My Resume",
    icon: "icon-file",
    path: "/user-Profile/my-resume",
    id: 2,
  },
  {
    title: "Saved Jobs",
    icon: "icon-default-user ",
    path: "/user-profile/saved-jobs",
    id: 3,
  },
  {
    title: "Applied Jobs",
    icon: "icon-heart-default ",
    path: "/user-profile/applied-jobs",
    id: 4,
  },
  {
    title: "Job Alerts",
    icon: "icon-alerm-default ",
    path: "/user-profile/job-alerts",
    id: 5,
  },
  {
    title: "CV Manager",
    icon: "icon-burger-3-row ",
    path: "/user-profile/cv-manager",
    id: 5,
  },
  {
    title: "Change Password",
    icon: "icon-edit ",
    path: "/user-profile/change-password",
    id: 6,
  },
]);

const userInfo = ref({
  id: 1,
  name: "Shuvo Mallick",
  designation: "Web Developer",
  role: "user",
  image: "../src/assets/images/user-profile-pic-1.jpg",
});

// Computed Function
const activeNav = computed(() => {
  return route.path;
});
</script>
