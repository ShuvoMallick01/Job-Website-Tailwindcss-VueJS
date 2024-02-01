<template>
  <!-- Title -->
  <SubSectionHeading headingName="Apllied JOBS" />

  <!-- Card -->
  <JobPostCard :jobList="jobStore.handleFilterAppliedJobsByUser" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import JobPostCard from "../../components/JobPostCard.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import { useJobsStore } from "../../stores/jobStore";

// State
const { getJobList } = useJobsStore();
const jobStore = useJobseekersStore();

onMounted(() => {
  getJobList();
});
</script>
