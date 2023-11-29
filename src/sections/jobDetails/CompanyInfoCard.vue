<template>
  <div class="order-1 md:order-2">
    <div
      class="bg-gray-200/50 border border-slate-300 p-6 rounded-lg dark:bg-gray-700 dark:border-slate-500"
    >
      <div class="text-center content-center">
        <CircleBadge size="extra-large" color="secondary" class="mx-auto">
          {{ job.companyName ? job.companyName[0] : "" }}
        </CircleBadge>

        <h3 class="mt-2">{{ job.companyName }}</h3>
      </div>

      <div class="space-y-2 mt-6 text-slate-600 mb-8 dark:text-gray-300">
        <IconText :title="job.createdAt" wrapperClasses="block">
          <template #prefix>
            <i class="fa-regular fa-calendar-days me-1"></i>
          </template>
        </IconText>

        <IconText
          :title="job.jobType + ' | ' + job.jobRole"
          wrapperClasses="block"
        >
          <template #prefix>
            <i class="icon-info-circle me-1 me-1"></i>
          </template>
        </IconText>

        <IconText
          :title="'$' + job.salary + ' per Month'"
          wrapperClasses="block"
        >
          <template #prefix>
            <i class="icon-info-circle me-1"></i>
          </template>
        </IconText>

        <IconText
          :title="
            job.location + ' | ' + `${job.isRemote ? 'Remote' : 'Note Remote'}`
          "
          wrapperClasses="block"
        >
          <template #prefix>
            <i class="fa-solid fa-location-dot me-1"></i>
          </template>
        </IconText>
      </div>

      <div class="flex flex-col text-center gap-4">
        <Button
          v-if="!job.jobApplyStatus"
          title="Apply Now"
          color="secondary"
          name="jobApplyButton"
          wrapperClasses="group/apply relative pe-8 invisible group-hover/item:visible transition300 relative order-2 md:order-1"
          @click.prevent="store.handleJobApplyByUser(item.id)"
        >
          <template #suffix>
            <span
              class="group-hover/apply:translate-x-1 absolute right-0 ps-4 mx-3 transition300"
            >
              <i class="icon-arrow-single-right align-middle"></i>
            </span>
          </template>
        </Button>

        <Badge
          v-else
          title="Applied"
          variant="text"
          size="text-medium"
          color="secondary"
          ><template #prefix><i class="icon-check align-middle"></i></template
        ></Badge>

        <Button
          @click="visitWebsite"
          target="_blank"
          title="Visit Website"
          variant="outline"
        />
      </div>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script setup>
import { onMounted, ref } from "vue";
import { useJobsStore } from "../../stores/jobStore";
import { useRoute } from "vue-router";
import IconText from "../../components/IconText.vue";
import CircleBadge from "../../components/Badge/CircleBadge.vue";
import Button from "../../components/Button/Button.vue";
import Badge from "../../components/Badge/Badge.vue";

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
