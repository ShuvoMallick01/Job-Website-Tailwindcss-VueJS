<template>
  <router-link to="/job-details" v-for="(item, index) in jobList" :key="index">
    <div
      class="group/item md:flex justify-between border-b pb-5 mb-5 items-center lg:px-5 px-2 py-3 hover:bg-slate-100 cursor-pointer rounded-lg dark:border-b-slate-700 dark:hover:bg-gray-800"
    >
      <div class="flex items-center gap-4">
        <SingleTextCircle :title="item.companyName" />

        <div class="">
          <p class="text-slate-500 text-xs md:text-sm mb-1 dark:text-slate-400">
            {{ item.companyName }}
          </p>
          <h4 class="heading-paragraph mb-2">
            {{ item.jobTitle }}
          </h4>

          <div class="flex gap-2">
            <BtnExtraSmall :title="item.isRemote ? 'Remote' : 'Not Remote'" />
            <BtnExtraSmall :title="item.jobType" />
            <BtnExtraSmall :title="item.jobRole" />
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2 xl:gap-4 ms-14 md:ms-0 md:mt-0 mt-4">
        <BtnApply :title="'Apply Now'" v-if="item.jobApplyStatus" />
        <BtnText v-else :icon="'icon-check'" :title="'Applied'" />

        <p class="text-sm text-slate-400 order-1 md:order-2">
          {{ item.createdAt }}
        </p>

        <div class="group/heart md:order-3">
          <BtnIcon :icon="'icon-heart-default'" />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import BtnExtraSmall from "./buttons/BtnExtraSmall.vue";
import BtnIcon from "./buttons/BtnIcon.vue";
import BtnApply from "./buttons/BtnApply.vue";
import SingleTextCircle from "./icons/SingleTextCircle.vue";
import BtnText from "./buttons/BtnText.vue";

defineProps({
  jobList: {
    type: Array,
    default: [],
    required: true,
  },
});
</script>
