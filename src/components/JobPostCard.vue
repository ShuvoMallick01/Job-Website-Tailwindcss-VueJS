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
        <Badge
          :title="item.companyName[0]"
          size="circle-large"
          color="secondary"
          variation="filled"
          shape="circle"
        />

        <div class="">
          <p class="text-slate-500 text-xs md:text-sm mb-1 dark:text-slate-400">
            {{ item.companyName }}
          </p>
          <h4 class="heading-paragraph mb-2">
            {{ item.jobTitle }}
          </h4>

          <div class="flex gap-2">
            <Badge
              :title="item.isRemote ? 'Remote' : 'Not Remote'"
              size="medium"
              color="gray"
              variation="filled"
            />
            <Badge
              :title="item.jobType"
              size="medium"
              color="gray"
              variation="filled"
            />
            <Badge
              :title="item.jobRole"
              size="medium"
              color="gray"
              variation="filled"
            />
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2 xl:gap-4 ms-14 md:ms-0 md:mt-0 mt-4">
        <ButtonV1
          v-if="!item.jobApplyStatus"
          title="Apply Now"
          size="medium"
          color="secondary"
          name="jobApplyButton"
          suffixIcon="icon-arrow-single-right align-middle"
          wrapperClasses="group/apply relative pe-8 invisible group-hover/item:visible transition300 relative order-2 md:order-1"
          suffixIconAnimation="group-hover/apply:translate-x-1 absolute right-0 ps-4 mx-3 transition300"
          @click.prevent="store.handleJobApplyByUser(item.id)"
        />

        <Badge
          v-else
          title="Applied"
          prefix="icon-check  align-middle"
          variant="text"
          size="text-medium"
          color="secondary"
        />

        <p class="text-sm text-slate-400 order-1 md:order-2">
          {{ item.createdAt }}
        </p>

        <div class="group/heart md:order-3">
          <ButtonV1
            :suffixIcon="
              item.isFavorite ? 'icon-heart-filled' : 'icon-heart-default'
            "
            shape="circle"
            size="circle-medium"
            iconSize="icon-medium"
            color="secondary-light"
            @click.prevent="store.handleJobFavorite(item.id)"
          />
        </div>
      </div>
    </div>
  </router-link>
</template>

<!-- SCRIPT -->
<script setup>
import Button from "./buttons/Button.vue";
import ButtonV1 from "./buttons/Button-v1.vue";
import Badge from "./Badge.vue";
import IconText from "./icons/IconText.vue";

import { useJobsStore } from "../stores/jobStore";
import { onMounted, ref } from "vue";

// PROPS
defineProps({
  jobList: {
    type: Array,
    default: [],
    required: true,
  },
});

// STATE
const store = useJobsStore();

// METHODS
</script>
