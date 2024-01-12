<template>
  <LayoutDashboard
    :pageTitle="'EMPLOYER PROFILE'"
    :navList="userNavList"
    :userInfo="getUserData"
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
import { useAuthsStore } from "../../stores/authStore";
import { useEmployesStore } from "../../stores/employerStore";

// State
const employesStore = useEmployesStore();
const authStore = useAuthsStore();
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
    title: "Delete Profile",
    icon: "icon-trash ",
    path: "",
    id: 9,
  },
]);

const getUserData = computed(() => {
  return employesStore.companyProfileList.find(
    (item) => item.employerId === authStore.userState.user.id
  );
});

// console.log(getUserData.value);

// Computed Function
const activeNav = computed(() => {
  return route.path;
});
</script>
