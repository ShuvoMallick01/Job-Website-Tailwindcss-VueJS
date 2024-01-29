<template>
  <LayoutDashboard
    :pageTitle="'JOB SEEKER PROFILE'"
    :navList="userNavList"
    :userInfo="userState.user"
    :activeNav="activeNav"
  >
    <!-- RIGHT -->
    <router-view></router-view>
  </LayoutDashboard>
</template>

<!-- SCRIPT -->
<script setup>
import { computed, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import { useAuthsStore } from "../../stores/authStore";
import LayoutDashboard from "../../components/layout/LayoutDashboard.vue";

const jobseekerStore = useJobseekersStore();
const { userState, getUser } = useAuthsStore();
const route = useRoute();
const userNavList = ref([
  {
    title: "Profile",
    icon: "icon-default-user",
    path: "/jobseeker-profile/profile",
    id: 1,
  },
  {
    title: "My Resume",
    icon: "icon-file",
    path: "/jobseeker-profile/my-resume",
    id: 2,
  },
  {
    title: "Saved Jobs",
    icon: "icon-heart-default",
    path: "/jobseeker-profile/saved-jobs",
    id: 3,
  },
  {
    title: "Applied Jobs",
    icon: "icon-checkbox-filled-2 ",
    path: "/jobseeker-profile/applied-jobs",
    id: 4,
  },
  {
    title: "Job Alerts",
    icon: "icon-alerm-default ",
    path: "/jobseeker-profile/job-alerts",
    id: 5,
  },
  {
    title: "CV Manager",
    icon: "icon-burger-3-row ",
    path: "/jobseeker-profile/cv-manager",
    id: 5,
  },
  {
    title: "Change Password",
    icon: "icon-edit ",
    path: "/jobseeker-profile/change-password",
    id: 6,
  },
  {
    title: "Delete Profile",
    icon: "icon-trash ",
    path: "",
    id: 7,
  },
]);

const activeNav = computed(() => {
  return route.path;
});

onMounted(() => {
  getUser(userState.user.id);
});
</script>
