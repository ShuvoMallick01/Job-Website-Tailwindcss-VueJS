<template>
  <!-- RIGHT SIDE -->
  <div
    class="col-span-3 lg:col-span-2 border py-6 lg:px-5 px-3 rounded-lg bg-white dark:bg-gray-900 dark:border-slate-700"
  >
    <JobPostCard :jobList="jobStore.filterJobsByJobseeker"></JobPostCard>
  </div>
</template>

<!-- SCRIPT -->
<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useJobsStore } from "../../stores/jobStore";
import JobPostCard from "../../components/JobPostCard.vue";

// State
const jobStore = useJobsStore();

// Methods
onMounted(() => {
  jobStore.getJobList();
});
</script>
