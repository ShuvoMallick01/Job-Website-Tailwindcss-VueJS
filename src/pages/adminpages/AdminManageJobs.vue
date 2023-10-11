<template>
  <div class="pb-4 mb-5 flex justify-between items-center border-b">
    <h2 class="heading-paragraph uppercase">Manage Jobs</h2>

    <div class="flex items-center">
      <p class="whitespace-nowrap me-2 description-text">Sort by Freshness</p>
      <FormSelect :optionList="formSelectList[0]" />
    </div>
  </div>

  <!-- Table -->
  <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-4 py-3">
              <FormCheckInputOnly />
            </th>

            <th v-for="item in tableHeaderList" scope="col" class="px-6 py-3">
              {{ item }}
            </th>
          </tr>
        </thead>

        <tbody>
          <JobManageTableRow :jobList="jobList" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import JobManageTableRow from "../../components/dashboard/JobManageTableRow.vue";
import FormSelect from "../../components/form/FormSelect.vue";
import FormCheckInputOnly from "../../components/form/FormCheckInputOnly.vue";

// State
const formSelectList = ref([
  [
    { title: "Filter by Months", value: "" },
    { title: "Last 3 Months", value: 3 },
    { title: "Last 6 Months", value: 6 },
    { title: "Last 9 Months", value: 9 },
    { title: "Last 12 Months", value: 12 },
  ],
]);
const tableHeaderList = ref(["Job Title", "Applications", "Status", "Action"]);

const jobList = ref([
  {
    id: 1,
    adminId: 1,
    jobTitle: "Senior Ract Developer",
    isRemote: true,
    jobType: "Full Time",
    jobRole: "Programming",
    location: "USA",
    applicants: 5,
    status: true,
    salary: 2000,
  },
  {
    id: 2,
    adminId: 1,
    jobTitle: "Senior Ract Developer",
    isRemote: true,
    jobType: "Full Time",
    jobRole: "Programming",
    location: "USA",
    applicants: 5,
    status: true,
    salary: 2000,
  },
  {
    id: 3,
    adminId: 1,
    jobTitle: "Senior Ract Developer",
    isRemote: true,
    jobType: "Full Time",
    jobRole: "Programming",
    location: "USA",
    applicants: 5,
    status: true,
    salary: 2000,
  },
  {
    id: 4,
    adminId: 1,
    jobTitle: "Senior Ract Developer",
    isRemote: true,
    jobType: "Full Time",
    jobRole: "Programming",
    location: "USA",
    applicants: 5,
    status: true,
    salary: 2000,
  },
]);
</script>
