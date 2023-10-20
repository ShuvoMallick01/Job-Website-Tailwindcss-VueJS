<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mb-5 pt-5 mt-24">
    <Button
      :isButton="false"
      url="/"
      className="btn-text"
      title="All Jobs"
      :beforeIcon="'fa-solid fa-arrow-left me-1'"
    />

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:gap-8 lg:gap-10 xl:gap-28"
    >
      <div
        class="col-span-1 md:col-span-1 lg:col-span-2 order-2 md:order-1 mt-10 md:mt-0"
      >
        <h1 class="heading">{{ job.jobTitle }}</h1>

        <h4 class="pb-2 mt-6 heading-paragraph">
          {{ job ? String(job.description).slice(0, 20) : "" }}
        </h4>
        <p class="paragraph-primary text-justify">
          {{ job.description }}
        </p>

        <h4 class="pb-2 mt-6 heading-paragraph">
          {{ job ? String(job.description).slice(0, 20) : "" }}
        </h4>
        <p class="paragraph-primary text-justify">
          {{ job.description }}
        </p>

        <!-- Social Media -->
        <div class="flex gap-2 justify-end mt-8 pb-10 items-center">
          <p class="paragraph-primary">Share Job</p>
          <Button
            isButton="true"
            v-for="social in store.socialMediaList"
            className="btn-icon"
            :beforeIcon="social"
          />
        </div>

        <!-- Related Jobs -->
        <div
          class="mt-6 pt-6 border-t border-slate-300 py-6 bg-white px-4 mb-10"
        >
          <h1 class="heading pt-2 mb-8 px-6">Related Jobs</h1>
          <JobPostCard :jobList="store.jobList"></JobPostCard>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="order-1 md:order-2">
        <div
          class="bg-gray-200/50 border border-slate-300 p-6 rounded-lg dark:bg-gray-700 dark:border-slate-500"
        >
          <div class="text-center content-center">
            <!-- <SingleTextCircle :title="job.companyName" class="mx-auto" /> -->
            <IconText
              :title="job.companyName ? job.companyName[0] : ''"
              :className="'singleTextCircle mx-auto md:h-10 md:w-10'"
            />
            <h2 class="heading mt-2">{{ job.companyName }}</h2>
          </div>

          <div class="space-y-2 mt-6 text-slate-600 mb-8 dark:text-gray-300">
            <IconText
              :title="job.createdAt"
              className="block"
              :beforeIcon="'fa-regular fa-calendar-days me-1'"
            />

            <IconText
              :title="job.jobType + ' | ' + job.jobRole"
              className="block"
              :beforeIcon="'icon-info-circle me-1'"
            />

            <IconText
              :title="'$' + job.salary + ' per Month'"
              className="block"
              :beforeIcon="'fa-solid fa-money-bill me-1'"
            />

            <IconText
              :title="
                job.location +
                ' | ' +
                `${job.isRemote ? 'Remote' : 'Note Remote'}`
              "
              className="block"
              :beforeIcon="'fa-solid fa-location-dot me-1'"
            />
          </div>

          <div class="flex flex-col text-center gap-4">
            <Button
              v-if="!job.jobApplyStatus"
              :isButton="false"
              name="jobApplyButton"
              className="btn btn-primary group/apply"
              iconAnimation="group-hover/apply:translate-x-1 absolute right-0 ps-2 mx-2 transition300"
              afterIcon="icon-arrow-single-right align-middle"
              title="Apply Now"
              url="/job-apply-form"
            />
            <Button
              v-else
              :isButton="true"
              beforeIcon="icon-check"
              className="btn-text"
              title="Applied"
            />

            <Button
              isButton="true"
              @click="visitWebsite"
              target="_blank"
              className="btn btn-outline-primary"
              title="Visit Website"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import { onMounted, ref } from "vue";
import { useJobsStore } from "../stores/jobStore";
import { useRoute } from "vue-router";
import JobPostCard from "../components/JobPostCard.vue";
import IconText from "../components/icons/IconText.vue";
import Button from "../components/buttons/Button.vue";

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
