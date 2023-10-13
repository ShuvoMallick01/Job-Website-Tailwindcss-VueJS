<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mb-5 pt-5 mt-24">
    <router-link to="/" class="btn-text dark:text-secondary"
      ><i class="fa-solid fa-arrow-left me-2"></i>All Jobs</router-link
    >

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:gap-8 lg:gap-10 xl:gap-28"
    >
      <div
        class="col-span-1 md:col-span-1 lg:col-span-2 order-2 md:order-1 mt-10 md:mt-0"
      >
        <h1 class="heading">Engineering Management Delopment Experience</h1>

        <h4 class="pb-2 mt-6 heading-paragraph">The Role and Category</h4>
        <p class="paragraph-primary text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis
          atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores
          iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis
          magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat
          vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur?
          Ducimus.
        </p>

        <h4 class="pb-2 mt-6 heading-paragraph">Responsibility</h4>
        <p class="paragraph-primary text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis
          atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores
          iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis
          magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat
          vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur?
          Ducimus.
        </p>

        <h4 class="pb-2 mt-6 heading-paragraph">Rules</h4>
        <p class="paragraph-primary text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis
          atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores
          iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis
          magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat
          vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur?
          Ducimus.
        </p>

        <!-- Social Media -->
        <div class="flex gap-2 justify-end mt-8 pb-10 items-center">
          <p class="paragraph-primary">Share Job</p>
          <BtnIcon
            v-for="(social, index) in socialMediaList"
            :icon="social"
            key="index"
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
            <SingleTextCircle :title="'J'" class="mx-auto" />
            <h2 class="heading mt-2">Medium Inc</h2>
          </div>

          <div class="space-y-2 mt-6 text-slate-600 mb-10 dark:text-gray-300">
            <p>
              <i class="fa-regular fa-calendar-days me-2"></i>24 August, 2024
            </p>
            <p>
              <i class="fa-solid fa-location-dot me-2"></i>Landon, Uk / Remote
              Friendly
            </p>
            <p><i class="fa-solid fa-money-bill me-2"></i>$75k-$100k</p>
          </div>
          <BtnApply :title="'Apply Now'" />

          <div class="flex flex-col text-center gap-4">
            <router-link to="/login" class="btn btn-primary"
              >Apply Now</router-link
            >
            <a
              href="www.shuvomallick.com"
              target="_blank"
              class="btn btn-outline-primary"
              >Visit Website</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import { ref } from "vue";
import JobPostCard from "../components/JobPostCard.vue";
import { useJobsStore } from "../stores/jobStore";
import BtnIcon from "../components/buttons/BtnIcon.vue";
import SingleTextCircle from "../components/icons/SingleTextCircle.vue";
import BtnApply from "../components/buttons/BtnApply.vue";
const store = useJobsStore();

// State
const socialMediaList = ref([
  "icon-facebook-1",
  "icon-twitter",
  "icon-youtube",
  "icon-linkedin",
]);
const jobApplyStatus = ref(true);
</script>
