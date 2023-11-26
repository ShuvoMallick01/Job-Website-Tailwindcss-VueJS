<template>
  <!-- Title -->
  <SubSectionHeading headingName="Apllied JOBS" />

  <!-- Card -->
  <JobPostCard :jobList="filterAppliedJobs" />
</template>

<script setup>
import { ref } from "vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import JobPostCard from "../../components/JobPostCard.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";

// State
const jobStore = useJobseekersStore();
const filterAppliedJobs = jobStore.handleFilterAppliedJobs(1);
</script>
