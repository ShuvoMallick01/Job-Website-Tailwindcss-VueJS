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
          <div class="form-check">
            <FormCheck
              :title="item.title"
              :name="item.name"
              :value="item.value"
              @click="jobTypeFilter($event, item.value)"
            />
          </div>
          <!-- :checked="isSelected" -->
        </template>
      </div>
    </div>

    <!-- Job Roles -->
    <div class="">
      <h3 class="sectionSubHeading mb-3">Job Role</h3>
      <template v-for="(item, index) in jobRolesCheckList" :key="index">
        <div class="form-check">
          <FormCheck
            :title="item.title"
            :name="item.name"
            :value="item.value"
            @click="jobRoleFilter($event, item.value)"
          />
        </div>
      </template>
    </div>

    <!-- Remote Only -->
    <div class="">
      <h3 class="sectionSubHeading mb-3">Remote Only</h3>
      <div class="form-check">
        <!-- <FormCheck title="Off" v-model="store.filterJobList.remoteOnly" /> -->
        <CheckToggle
          :title="remoteStatus ? 'Yes' : 'No'"
          v-model="store.filterJobList.isRemote"
        />
      </div>
      {{ store.filterJobList }}
    </div>

    <!-- Salary Range -->
    <div class="">
      <h3 class="sectionSubHeading mb-3">Salary Range</h3>
      <template v-for="(item, index) in salaryRangeCheckList" :key="index">
        <div class="form-check">
          <FormCheck
            :title="item.title"
            :name="item.name"
            :value="item.name"
            @click="salaryFilter($event, item.name)"
          />
        </div>
      </template>
    </div>

    <!-- Location -->
    <div class="">
      <h3 class="font-medium text-slate-700 mb-3">Location</h3>
      <FormSelect
        :optionList="locationList"
        v-model="store.filterJobList.location"
      />
    </div>
  </div>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import { reactive, ref } from "vue";
import FormSelect from "../components/form/FormSelect.vue";
import FormCheck from "../components/form/FormCheck.vue";
import CheckToggle from "../components/form/CheckToggle.vue";
import { useJobsStore } from "../stores/jobStore";
import CheckToggleVue from "./form/CheckToggle.vue";

// STATE
const store = useJobsStore();
const remoteStatus = ref(false);

// const isSelected = ref(true);
// METHODS
// const jobTypeisChecked=()=>{
//   store.filterJobList.jobType.find(item => item === )
// }

const jobTypeFilter = (event, filterValue) => {
  const type = ref("jobType");
  store.handleJobFilterState(event, type.value, filterValue);
};

const jobRoleFilter = (event, filterValue) => {
  const type = ref("jobRole");
  console.log(event, filterValue);
  store.handleJobFilterState(event, type.value, filterValue);
};

const salaryFilter = (event, salaryValue) => {
  const type = ref("salary");
  console.log(event, salaryValue);
  store.handleJobFilterState(event, type.value, salaryValue);
};

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
  { title: "$5k - $10k", name: "5000-10000" },
  { title: "$10k - $20k", name: "10000-20000" },
  { title: "$20k - $30k", name: "20000-30000" },
  { title: "$30k - Infinity", name: "30000-infinity" },
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
