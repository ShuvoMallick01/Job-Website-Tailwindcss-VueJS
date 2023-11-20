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
        <CircleBadge color="secondary" size="large">{{
          item.companyName[0]
        }}</CircleBadge>

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
              color="gray"
            />
            <Badge :title="item.jobType" color="gray" />
            <Badge :title="item.jobRole" color="gray" />
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2 xl:gap-4 ms-14 md:ms-0 md:mt-0 mt-4">
        <Button
          v-if="!item.jobApplyStatus"
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
        >
          <template #prefix>
            <i class="icon-check align-middle"></i>
          </template>
        </Badge>

        <p class="text-sm text-slate-400 order-1 md:order-2">
          {{ item.createdAt }}
        </p>

        <div class="group/heart md:order-3">
          <IconButton
            color="secondary"
            @click.prevent="store.handleJobFavorite(item.id)"
          >
            <i
              :class="
                item.isFavorite ? 'icon-heart-filled ' : 'icon-heart-default'
              "
            ></i>
          </IconButton>
        </div>
      </div>
    </div>
  </router-link>
</template>

<!-- SCRIPT -->
<script setup>
import { onMounted, ref } from "vue";
import { useJobsStore } from "../../stores/jobStore";
import Button from "../global-components/Button/Button.vue";
import Badge from "../global-components/Badge/Badge.vue";
import CircleBadge from "../global-components/Badge/Circle-badge.vue";
import IconButton from "../global-components/Button/Icon-button.vue";

defineProps({
  jobList: {
    type: Array,
    default: [],
    required: true,
  },
});

const store = useJobsStore();
</script>
