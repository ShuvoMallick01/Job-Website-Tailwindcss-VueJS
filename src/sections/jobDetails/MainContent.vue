<template>
  <!-- Main Section -->
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:gap-8 lg:gap-10 xl:gap-28"
  >
    <!-- LEFT: Description -->
    <JobDescription />

    <!-- RIGHT -->
    <CompanyInfoCard />
  </div>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import { onMounted, ref } from "vue";
import { useJobsStore } from "../../stores/jobStore";
import { useRoute } from "vue-router";
import JobDescription from "../../sections/jobDetails/JobDescription.vue";
import CompanyInfoCard from "../../sections/jobDetails/CompanyInfoCard.vue";

// STATE
const route = useRoute();
const store = useJobsStore();
const id = route.params.id;
let job = ref({});

// METHODS
onMounted(() => {
  let newJob = store.jobList[+id - 1];
  job.value = newJob;
  console.log(job.value);
});

const visitWebsite = () => {
  window.open("https://www.facebook.com", "_blank");
};
</script>
