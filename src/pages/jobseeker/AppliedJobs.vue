<template>
  <!-- Title -->
  <SubSecHeading
    headingTitle="Apllied JOBS"
    divClassName="mb-8 pb-3 border-b"
  />

  <!-- Card -->
  <JobPostCard :jobList="filterAppliedJobs" />
</template>

<script setup>
import { ref } from "vue";
import JobPostCard from "../../components/JobPostCard.vue";
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";

// State
const jobStore = useJobseekersStore();
const filterAppliedJobs = jobStore.handleFilterAppliedJobs(1);
</script>
