<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mb-5 pt-5 mt-24">
    <!-- Back -->
    <Link :href="'/'" title="All Jobs">
      <template #prefix>
        <i class="fa-solid fa-arrow-left me-1"></i>
      </template>
    </Link>

    <!-- Main Section -->
    <MainContent />

    <!-- RELATED JOBS -->
    <RelatedJobs />
  </section>
</template>

<!-- SCRIPT -->
<script setup>
import { onMounted, ref } from "vue";
import { useJobsStore } from "../stores/jobStore";
import { useRoute } from "vue-router";
import Link from "../components/Link.vue";
import RelatedJobs from "../sections/jobDetails/RelatedJobs.vue";
import MainContent from "../sections/jobDetails/MainContent.vue";

const route = useRoute();
const store = useJobsStore();
const id = route.params.id;
let job = ref({});

onMounted(() => {
  let newJob = store.jobList[+id - 1];
  job.value = newJob;
});

const visitWebsite = () => {
  window.open("https://www.facebook.com", "_blank");
};
</script>
