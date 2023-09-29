<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mb-16 mt-20">
    <div class="py-10 text-center">
      <h1 class="sectionHeading">ADMIN PROFILE</h1>
    </div>

    <div class="grid grid-cols-3 gap-3 md:gap-6 lg:gap-10">
      <!-- LEFT -->
      <div
        class="border col-span-3 md:col-span-1 py-6 px-5 lg:px-8 rounded-lg bg-white truncate dark:bg-gray-900 dark:border-slate-700"
      >
        <!-- Picture -->
        <div class="text-center border-0 p-4 shadow-md mb-5">
          <div
            class="shrink-0 h-20 w-20 bg-primary rounded-full overflow-hidden mx-auto mb-3 border-2 border-secondary"
          >
            <img
              class=""
              src="../assets/images/user-profile-pic-1.jpg"
              alt="User Profile"
            />
          </div>
          <h3 class="sectionSubHeading mb-0 pb-0">David Matin</h3>
          <p class="text-xs font-light">Web Developer</p>
        </div>

        <!-- Navbar -->
        <div>
          <ul class="description-text">
            <li
              class="px-2 py-2.5 border-s-2 border-s-white hover:bg-slate-100 hover:border-s-2 hover:border-s-primary cursor-pointer border-b transition300 dark:border-s-transparent dark:border-b-slate-600 dark:hover:bg-gray-800 dark:hover:border-s-slate-400"
              v-for="nav in userNavList"
              :key="nav.id"
            >
              <a
                ><i class="me-2 self-baseline" :class="nav.icon"></i
                >{{ nav.title }}</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- RIGHT -->
      <div
        class="col-span-3 md:col-span-2 border py-6 lg:px-5 px-3 rounded-lg bg-white dark:bg-gray-900 dark:border-slate-700"
      >
        <!-- Card -->
        <JobPostCard></JobPostCard>
        <JobPostCard></JobPostCard>
        <JobPostCard></JobPostCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import JobPostCard from "../components/JobPostCard.vue";

// State
const userNavList = ref([
  { title: "Profile", icon: "icon-default-user ", id: 1 },
  { title: "My Resume", icon: "icon-file", id: 2 },
  { title: "Saved Jobs", icon: "icon-default-user ", id: 3 },
  { title: "Applied Jobs", icon: "icon-heart-default ", id: 4 },
  { title: "Job Alerts", icon: "icon-alerm-default ", id: 5 },
  { title: "CV Manager", icon: "icon-burger-3-row ", id: 5 },
  { title: "Change Password", icon: "icon-edit ", id: 6 },
  { title: "Log Out", icon: "icon-logout  ", id: 6 },
]);
</script>
