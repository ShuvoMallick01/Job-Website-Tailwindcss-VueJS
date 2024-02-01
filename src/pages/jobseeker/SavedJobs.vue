<template>
  <!-- Title -->
  <SubSectionHeading headingName="SAVED JOBS" />

  <!-- Card -->
  <JobPostCard
    :jobList="jobseekerStore.handleFilterSavedJobsByUser"
  ></JobPostCard>
</template>

<!-- SCRIPT -->
<script setup>
import { ref, onMounted } from "vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import JobPostCard from "../../components/JobPostCard.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import { useJobsStore } from "../../stores/jobStore";

const jobseekerStore = useJobseekersStore();
const { getJobList } = useJobsStore();

onMounted(() => {
  getJobList();
});
</script>
