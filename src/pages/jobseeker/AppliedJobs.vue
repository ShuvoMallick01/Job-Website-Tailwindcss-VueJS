<template>
  <!-- Title -->
  <SubSectionHeading headingName="Apllied JOBS" />

  <!-- Card -->
  <JobPostCard :jobList="filterAppliedJobs" />
</template>

<script setup>
import { ref } from "vue";

import JobPostCard from "../../components/local-components/JobPostCard.vue";
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";

// State
const jobStore = useJobseekersStore();
const filterAppliedJobs = jobStore.handleFilterAppliedJobs(1);
</script>
