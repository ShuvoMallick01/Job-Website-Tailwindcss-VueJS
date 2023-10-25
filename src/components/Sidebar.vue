<template>
  <div
    class="h-full px-8 py-6 overflow-y-auto 0 bg-white border rounded-lg dark:border-slate-700 dark:bg-gray-900 space-y-8"
  >
    <!-- Job Type -->
    <div class="">
      <div class="space-y-1">
        <h3 class="sectionSubHeading mb-3">Job Type</h3>

        <div class="form-check" v-for="item in jobTypeCheckList" :key="item.id">
          <CheckBox
            :label="item.title"
            :id="item.value"
            :checked="store.filterJobList.jobType.includes(item.value)"
            @input="
              () => {
                const index = store.filterJobList.jobType.indexOf(item.value);
                console.log(index);
                if (index > -1) {
                  store.filterJobList.jobType.splice(index, 1);
                } else {
                  store.filterJobList.jobType.push(item.value);
                }
              }
            "
          />
        </div>
      </div>
    </div>

    <!-- Job Roles -->
    <div class="space-y-1">
      <h3 class="sectionSubHeading mb-3">Job Role</h3>

      <div class="form-check" v-for="item in jobRoleCheckList" :key="item.id">
        <CheckBox
          :label="item.title"
          :id="item.value"
          :checked="store.filterJobList.jobRole.includes(item.value)"
          @input="
            () => {
              const index = store.filterJobList.jobRole.indexOf(item.value);
              console.log(index);
              if (index > -1) {
                store.filterJobList.jobRole.splice(index, 1);
              } else {
                store.filterJobList.jobRole.push(item.value);
              }
            }
          "
        />
      </div>
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
    </div>

    <!-- Salary Range -->
    <div class="space-y-1">
      <h3 class="sectionSubHeading mb-3">Salary Range</h3>

      <div
        class="form-check"
        v-for="item in salaryRangeCheckList"
        :key="item.id"
      >
        <CheckBox
          :label="item.title"
          :id="item.value"
          :checked="store.filterJobList.salary.includes(item.value)"
          @input="
            () => {
              const index = store.filterJobList.salary.indexOf(item.value);
              console.log(index);
              if (index > -1) {
                store.filterJobList.salary.splice(index, 1);
              } else {
                store.filterJobList.salary.push(item.value);
              }
            }
          "
        />
      </div>
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
import CheckToggle from "../components/form/CheckToggle.vue";
import { useJobsStore } from "../stores/jobStore";
import CheckBox from "./form/CheckBox.vue";

// STATE
const store = useJobsStore();
const remoteStatus = ref(false);

const jobTypeCheckList = ref([
  { id: 1, title: "Full-time", value: "full-time" },
  { id: 2, title: "Part-time", value: "part-time" },
  { id: 3, title: "Internship", value: "internship" },
  { id: 4, title: "Contract", value: "contract" },
  { id: 5, title: "Co-founder", value: "co-founder" },
]);

const jobRoleCheckList = ref([
  { id: 1, title: "Programming", value: "programming" },
  { id: 2, title: "Design", value: "design" },
  { id: 3, title: "Management", value: "management" },
  {
    id: 4,
    title: "Customer Support",
    value: "customer support",
  },
  { id: 5, title: "Marketing", value: "marketing" },
]);

const salaryRangeCheckList = ref([
  { id: 1, title: "$5k - $10k", value: "5000-10000" },
  { id: 2, title: "$10k - $20k", value: "10000-20000" },
  { id: 3, title: "$20k - $30k", value: "20000-30000" },
  { id: 4, title: "$30k - Infinity", value: "30000-infinity" },
]);

const locationList = ref([
  { id: 1, title: "Choose a country", value: "" },
  { id: 2, title: "Bangladesh", value: "bangladesh" },
  { id: 3, title: "India", value: "india" },
  { id: 4, title: "United State", value: "united state" },
  { id: 5, title: "Canada", value: "canada" },
  { id: 6, title: "Europe", value: "europe" },
]);
</script>
