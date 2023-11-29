<template>
  <div
    class="col-span-1 md:col-span-1 lg:col-span-2 order-2 md:order-1 mt-10 md:mt-0"
  >
    <h2>JOB ROLE: {{ job.jobTitle }}</h2>

    <h4 class="pb-2 mt-6">
      {{ job ? String(job.description).slice(0, 20) : "" }}
    </h4>
    <p class="base-text text-justify">
      {{ job.description }}
    </p>

    <h4 class="pb-2 mt-6">
      {{ job ? String(job.description).slice(0, 20) : "" }}
    </h4>
    <p class="base-text text-justify">
      {{ job.description }}
    </p>

    <!-- Social Media -->
    <div class="flex gap-2 justify-end mt-8 pb-10 items-center">
      <p class="base-text">Share Job</p>
      <IconButton
        v-for="social in store.socialMediaList"
        color="secondary"
        variant="translucent"
      >
        <i :class="social"></i>
      </IconButton>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script setup>
import { onMounted, ref } from "vue";
import { useJobsStore } from "../../stores/jobStore";
import { useRoute } from "vue-router";
import IconButton from "../../components/Button/IconButton.vue";

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
</script>
