<template>
  <h2
    class="heading-paragraph mb-5 border-b pb-4 uppercase dark:border-slate-600"
  >
    Saved Jobs
  </h2>
  <!-- Card -->
  <JobPostCard :jobApplyStatus="jobApplyStatus"></JobPostCard>
  <JobPostCard :jobApplyStatus="jobApplyStatus"></JobPostCard>
  <JobPostCard :jobApplyStatus="jobApplyStatus"></JobPostCard>
</template>

<script setup>
import JobPostCard from "../../components/JobPostCard.vue";
import { ref } from "vue";

// Sate
const jobApplyStatus = ref(true);
</script>
