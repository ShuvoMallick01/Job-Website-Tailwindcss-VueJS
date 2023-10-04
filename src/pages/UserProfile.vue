<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainerFuild mb-16 mt-20">
    <div class="py-8 text-center">
      <h1 class="sectionHeading">USER PROFILE</h1>
    </div>

    <div class="grid grid-cols-3 gap-3 md:gap-6 lg:gap-10">
      <!-- LEFT -->
      <ProfileNavBar
        :profileInfo="userInfo"
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
import UserAppliedJobs from "../userpropages/UserAppliedJobs.vue";

const route = useRoute();

// State
const userNavList = ref([
  {
    title: "Profile",
    icon: "icon-default-user",
    path: "/userprofile/profile",
    id: 1,
  },
  {
    title: "My Resume",
    icon: "icon-file",
    path: "/userProfile/myresume",
    id: 2,
  },
  {
    title: "Saved Jobs",
    icon: "icon-default-user ",
    path: "/userprofile/savedjobs",
    id: 3,
  },
  {
    title: "Applied Jobs",
    icon: "icon-heart-default ",
    path: "/userprofile/appliedjobs",
    id: 4,
  },
  {
    title: "Job Alerts",
    icon: "icon-alerm-default ",
    path: "/userprofile/jobalerts",
    id: 5,
  },
  {
    title: "CV Manager",
    icon: "icon-burger-3-row ",
    path: "/userprofile/cvmanager",
    id: 5,
  },
  {
    title: "Change Password",
    icon: "icon-edit ",
    path: "/userprofile/changepassword",
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
