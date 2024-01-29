<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import axios from "axios";
import { onMounted } from "vue";
import { useJobseekersStore } from "./stores/jobseekerStore";
import { useJobsStore } from "./stores/jobStore";
import { useEmployesStore } from "./stores/employerStore";

// State
// const jobseekerStore = useJobseekersStore();
// const jobStore = useJobsStore();
// const employerStore = useEmployesStore();

// onMounted(() => {
//   jobseekerStore.getJobseekerList();
//   jobseekerStore.getResumeList();
//   jobStore.getJobList();
//   employerStore.getCompanyProfiles();
// });
</script>
