<template>
  <router-link
    :to="'/job-details/' + item.id"
    v-for="(item, index) in jobList"
    :key="index"
  >
    <div
      class="group/item md:flex justify-between border-b pb-5 mb-5 items-center lg:px-5 px-2 py-3 hover:bg-slate-100 cursor-pointer rounded-lg dark:border-b-slate-700 dark:hover:bg-gray-800"
    >
      <div class="flex items-center gap-4">
        <IconText :title="item.companyName[0]" className="singleTextCircle" />

        <div class="">
          <p class="text-slate-500 text-xs md:text-sm mb-1 dark:text-slate-400">
            {{ item.companyName }}
          </p>
          <h4 class="heading-paragraph mb-2">
            {{ item.jobTitle }}
          </h4>

          <div class="flex gap-2">
            <Button
              :isButton="true"
              :title="item.isRemote ? 'Remote' : 'Not Remote'"
              className="btn-sm-text"
              :key="item.isRemote"
            ></Button>
            <Button
              :isButton="true"
              :title="item.jobType"
              className="btn-sm-text "
            ></Button>
            <Button
              :isButton="true"
              :title="item.jobRole"
              className="btn-sm-text "
            ></Button>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2 xl:gap-4 ms-14 md:ms-0 md:mt-0 mt-4">
        <Button
          v-if="!item.jobApplyStatus"
          :isButton="true"
          name="jobApplyButton"
          className="btn-apply group/apply"
          iconAnimation="group-hover/apply:translate-x-1 absolute right-0 ps-2 mx-2 transition300"
          afterIcon="icon-arrow-single-right align-middle"
          title="Apply Now"
          @click.prevent="store.handleJobApplyByUser(item.id)"
        />
        <!-- url="/job-apply-form" -->
        <Button
          v-else
          :isButton="true"
          beforeIcon="icon-check"
          className="btn-text"
          title="Applied"
        />

        <p class="text-sm text-slate-400 order-1 md:order-2">
          {{ item.createdAt }}
        </p>

        <div class="group/heart md:order-3">
          <Button
            :isButton="true"
            :beforeIcon="
              item.isFavorite ? 'icon-heart-filled' : 'icon-heart-default'
            "
            :className="item.isFavorite ? 'btn-icon-active' : 'btn-icon'"
            @click.prevent="store.handleJobFavorite(item.id)"
          ></Button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import Button from "./buttons/Button.vue";
import IconText from "./icons/IconText.vue";
import { useJobsStore } from "../stores/jobStore";
import { onMounted, ref } from "vue";

// STATE
const store = useJobsStore();

// METHODS

// Props
defineProps({
  jobList: {
    type: Array,
    default: [],
    required: true,
  },
});
</script>
