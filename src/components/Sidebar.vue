<template>
  <div
    class="h-full px-8 py-6 overflow-y-auto 0 bg-white border rounded-lg dark:border-slate-700 dark:bg-gray-800 space-y-8"
  >
    <!-- Job Type -->
    <div class="">
      <h3 class="sectionSubHeading mb-3">Job Type</h3>
      <FormCheckInput :checkList="jobTypeCheckList" />
    </div>

    <!-- Job Roles -->
    <div class="">
      <h3 class="sectionSubHeading mb-3">Job Role</h3>
      <FormCheckInput :checkList="jobRolesCheckList" />
    </div>

    <!-- Remote Only -->
    <div class="">
      <h3 class="sectionSubHeading mb-3">Remote Only</h3>
      <FormCheckboxInput />
    </div>

    <!-- Salary Range -->
    <div class="">
      <h3 class="sectionSubHeading mb-3">Salary Range</h3>
      <FormCheckInput :checkList="salaryRangeCheckList" />
    </div>

    <!-- Location -->
    <div class="">
      <h3 class="font-medium text-slate-700 mb-3">Location</h3>
      <FormSelect :optionList="locationList" />
    </div>
  </div>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import { reactive, ref } from "vue";
import FormCheckInput from "../components/form/FormCheckInput.vue";
import FormCheckboxInput from "../components/form/FormCheckboxInput.vue";
import FormSelect from "../components/form/FormSelect.vue";

// State
const jobTypeCheckList = ref([
  { title: "Full-time", name: "fulltime" },
  { title: "Part-time", name: "partime" },
  { title: "Internship", name: "internship" },
  { title: "Contract/Freelance", name: "contract-freelance" },
  { title: "Co-founder", name: "cofounder" },
]);
const jobRolesCheckList = ref([
  { title: "Programming", name: "programming" },
  { title: "Design", name: "design" },
  { title: "Management / Finance", name: "management-finance" },
  { title: "Customer Support", name: "customerSupport" },
  { title: "Sales / Marketing", name: "sales-marketing" },
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
  { title: "United State", value: "unitedstate" },
  { title: "Canada", value: "canada" },
  { title: "Europe", value: "europe" },
]);
</script>
