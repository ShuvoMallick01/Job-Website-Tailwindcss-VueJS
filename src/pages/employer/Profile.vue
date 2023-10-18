<template>
  <LayoutDashboard
    :pageTitle="'EMPLOYER PROFILE'"
    :navList="userNavList"
    :userInfo="adminInfo"
    :activeNav="activeNav"
  >
    <!-- RIGHT -->
    <router-view></router-view>
  </LayoutDashboard>
</template>

<!-- Functinality -->
<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import LayoutDashboard from "../../components/layout/LayoutDashboard.vue";

// State
const route = useRoute();
const userNavList = ref([
  {
    title: "Profile",
    icon: "icon-default-user",
    path: "/employer-profile/profile",
    id: 1,
  },
  {
    title: "Post A New Job",
    icon: "icon-send",
    path: "/employer-profile/post-new-job",
    id: 2,
  },
  {
    title: "Manage Jobs",
    icon: "icon-briefcase ",
    path: "/employer-profile/manage-jobs",
    id: 3,
  },
  {
    title: "All Applicants",
    icon: "icon-file ",
    path: "/employer-profile/all-applicants",
    id: 4,
  },
  {
    title: "Shortlisted Resumes",
    icon: "icon-bookmark-default  ",
    path: "/employer-profile/short-listed-resumes",
    id: 5,
  },
  {
    title: "Messages",
    icon: "icon-mail",
    path: "/employer-profile/messages",
    id: 6,
  },
  {
    title: "Resume Alerts",
    icon: "icon-alerm-default ",
    path: "/employer-profile/resume-alert",
    id: 7,
  },
  {
    title: "Change Password",
    icon: "icon-security",
    path: "/employer-profile/change-password",
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
