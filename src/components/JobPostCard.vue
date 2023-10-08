<template>
  <router-link to="/job-details">
    <div
      class="group/item md:flex justify-between border-b pb-5 mb-5 items-center lg:px-5 px-2 py-3 hover:bg-slate-100 cursor-pointer rounded-lg dark:border-b-slate-700 dark:hover:bg-gray-800"
    >
      <div class="flex items-center gap-4">
        <div
          class="bg-secondary w-8 h-8 md:w-10 md:h-10 text-slate-100 text-base md:text-xl rounded-full flex justify-center flex-shrink-0 relative items-center"
        >
          <p class="absolute">P</p>
        </div>

        <div class="">
          <p class="text-slate-500 text-xs md:text-sm mb-1 dark:text-slate-400">
            robinhood
          </p>
          <h4 class="heading-paragraph mb-2">
            Senior Site Reliability Engineer
          </h4>

          <div class="flex gap-2">
            <span class="btn-sm-text"> Full Time </span>
            <span class="btn-sm-text"> Remote </span>
            <span class="btn-sm-text"> Remote </span>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2 xl:gap-4 ms-14 md:ms-0 md:mt-0 mt-4">
        <router-link
          v-if="jobApplyStatus"
          to="/job-apply-form"
          disabled
          class="bg-secondary whitespace-nowrap text-slate-200 text-sm py-2 ps-3 pe-6 rounded-full border transition300 hover:bg-slate-100 hover:border-secondaryDark hover:text-secondaryDark group/apply invisible group-hover/item:visible transition300 relative order-2 md:order-1"
          >Apply Now
          <span
            class="group-hover/apply:translate-x-1 absolute right-0 ps-2 mx-2 transition300"
            ><i class="icon-arrow-single-right align-middle"></i
          ></span>
        </router-link>

        <button v-else class="description-text">
          <i class="icon-check"></i> Applied
          <span
            class="group-hover/apply:translate-x-1 absolute right-0 ps-2 mx-2 transition300"
            ><i class="icon-arrow-single-right align-middle"></i
          ></span>
        </button>

        <p class="text-sm text-slate-400 order-1 md:order-2">3hr</p>

        <button class="group/heart md:order-3 btn-icon">
          <i class="icon-heart-default"></i>
        </button>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  jobApplyStatus: {
    type: Boolean,
    required: true,
  },
});
</script>
