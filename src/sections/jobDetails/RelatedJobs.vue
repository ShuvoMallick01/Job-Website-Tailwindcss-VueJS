<template>
  <!-- Related Jobs -->
  <div
    class="mt-6 pt-6 border-t border-slate-300 py-6 bg-white dark:bg-gray-900 px-4 mb-10"
  >
    <h1 class="heading pt-2 mb-8 px-6">Related Jobs</h1>
    <JobPostCard
      :jobList="store.jobList"
      :wrapperClasses="'dark:hover:bg-slate-600'"
    ></JobPostCard>
  </div>
</template>

<!-- SCRIPT -->
<script setup>
import { onMounted, ref } from "vue";
import { useJobsStore } from "../../stores/jobStore";
import { useRoute } from "vue-router";
import JobPostCard from "../../components/JobPostCard.vue";

// STATE
const route = useRoute();
const store = useJobsStore();
const id = route.params.id;
let job = ref({});

// METHODS
onMounted(() => {
  let newJob = store.jobList[+id - 1];
  job.value = newJob;
  // console.log(job.value);
});
</script>
