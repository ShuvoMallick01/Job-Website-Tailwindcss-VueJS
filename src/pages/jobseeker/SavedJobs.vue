<template>
  <!-- Title -->
  <SubSectionHeading headingName="SAVED JOBS" />

  <!-- Card -->
  <JobPostCard :jobList="jobStore.handleFilterSavedJobsByUser"></JobPostCard>
</template>

<!-- SCRIPT -->
<script setup>
import { ref } from "vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import JobPostCard from "../../components/JobPostCard.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";

const jobStore = useJobseekersStore();
</script>
