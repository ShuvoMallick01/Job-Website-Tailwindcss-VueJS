<template>
  <div
    class="h-full px-8 py-6 overflow-y-auto 0 bg-white border rounded-lg dark:border-slate-700 dark:bg-gray-900 space-y-8"
  >
    <!-- Job Type -->
    <div class="">
      <div class="space-y-1">
        <h3 class="sectionSubHeading mb-3">Job Type</h3>
        <!-- <FormCheckInput :checkList="jobTypeCheckList" /> -->
        <template v-for="(item, index) in jobTypeCheckList" :key="index">
          <FormCheck
            :title="item.title"
            :name="item.name"
            :value="item.value"
            @click="store.handleJobFilterState($event, jobType, item.value)"
          />
          <!-- :checked="isSelected" -->
        </template>
        {{ store.filterJobList.jobType }}
      </div>
    </div>

    <!-- Job Roles -->
    <div class="">
      <h3 class="sectionSubHeading mb-3">Job Role</h3>
      <template v-for="(item, index) in jobRolesCheckList" :key="index">
        <FormCheck
          :title="item.title"
          :name="item.name"
          :value="item.value"
          v-model="store.filterJobList.JobRole"
        />
      </template>
    </div>

    <!-- Remote Only -->
    <div class="">
      <h3 class="sectionSubHeading mb-3">Remote Only</h3>
      <FormCheck title="Off" v-model="store.filterJobList.remoteOnly" />
      <!-- {{ store.filterJobList }} -->
    </div>

    <!-- Salary Range -->
    <div class="">
      <h3 class="sectionSubHeading mb-3">Salary Range</h3>
      <template v-for="(item, index) in salaryRangeCheckList" :key="index">
        <FormCheck :title="item.title" :name="item.name" :value="item.name" />
      </template>
    </div>

    <!-- Location -->
    <div class="">
      <h3 class="font-medium text-slate-700 mb-3">Location</h3>
      <FormSelect :optionList="locationList" />
      <!-- @click="store.handleJobFilterState()" -->
    </div>
  </div>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import { reactive, ref } from "vue";
import FormSelect from "../components/form/FormSelect.vue";
import FormCheck from "../components/form/FormCheck.vue";
import { useJobsStore } from "../stores/jobStore";

// STATE
const store = useJobsStore();
// const isSelected = ref(true);

// METHODS
// const jobTypeisChecked=()=>{
//   store.filterJobList.jobType.find(item => item === )
// }

const jobTypeCheckList = ref([
  { title: "Full-time", name: "full-time", value: "full-time" },
  { title: "Part-time", name: "part-time", value: "part-time" },
  { title: "Internship", name: "internship", value: "internship" },
  {
    title: "Contract",
    name: "contract",
    value: "contract",
  },
  { title: "Co-founder", name: "co-founder", value: "co-founder" },
]);

const jobRolesCheckList = ref([
  { title: "Programming", name: "programming", value: "programming" },
  { title: "Design", name: "design", value: "design" },
  {
    title: "Management",
    name: "management",
    value: "management",
  },
  {
    title: "Customer Support",
    name: "customerSupport",
    value: "customer support",
  },
  {
    title: "Marketing",
    name: "marketing",
    value: "marketing",
  },
]);

const salaryRangeCheckList = ref([
  { title: "$10k - $50k", name: "10-50" },
  { title: "$50k - $100k", name: "50-100" },
  { title: "$100k - $200k", name: "100-200" },
  { title: "$100k - Infinity", name: "200-infinity" },
]);

const locationList = ref([
  { title: "Choose a country", value: "" },
  { title: "Bangladesh", value: "bangladesh" },
  { title: "India", value: "india" },
  { title: "United State", value: "united state" },
  { title: "Canada", value: "canada" },
  { title: "Europe", value: "europe" },
]);
</script>
