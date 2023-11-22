<template>
  <!-- Title -->
  <SubSectionHeading headingName="SAVED JOBS" />

  <!-- Card -->
  <JobPostCard :jobList="savedJobsList"></JobPostCard>
</template>

<!-- SCRIPT -->
<script setup>
import { ref } from "vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import JobPostCard from "../../components/local-components/JobPostCard.vue";
import SubSectionHeading from "../../components/local-components/dashboard/SubSectionHeading.vue";
const jobStore = useJobseekersStore();
const savedJobsList = jobStore.handleFilterSavedJobs(1);
</script>
