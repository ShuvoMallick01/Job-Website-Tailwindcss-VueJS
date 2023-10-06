<template>
  <h2 class="heading-paragraph mb-5 border-b pb-4 uppercase">Resume Alerts</h2>

  <!-- Table -->
  <AlertTable :fieldList="fieldList" :alertList="adminAlertList" />
</template>

<script setup>
import { ref, provide } from "vue";
import AlertTable from "../components/AlertTable.vue";

// State
const fieldList = ref(["Job Title", "Criteria", "Created", "Action"]);
const adminAlertList = ref([
  {
    id: 1,
    jobTitle: "Senior Full Stact Engineer",
    jobCategory: ["Remote", "Full time"],
    applicantInfo: ["React", "Vue", "JS"],
    times: "1 hr",
    actions: [{ icon: "icon-trash" }, { icon: "icon-eye-on" }],
  },
  {
    id: 2,
    jobTitle: "Senior Full Stact Engineer",
    jobCategory: ["Remote", "Full time"],
    applicantInfo: ["React", "Vue", "JS"],
    times: "1 hr",
    actions: [{ icon: "icon-trash" }, { icon: "icon-eye-on" }],
  },
  {
    id: 3,
    jobTitle: "Senior Full Stact Engineer",
    jobCategory: ["Remote", "Full time"],
    applicantInfo: ["React", "Vue", "JS"],
    times: "1 hr",
    actions: [{ icon: "icon-trash" }, { icon: "icon-eye-on" }],
  },
  {
    id: 4,
    jobTitle: "Senior Full Stact Engineer",
    jobCategory: ["Remote", "Full time"],
    applicantInfo: ["React", "Vue", "JS"],
    times: "1 hr",
    actions: [{ icon: "icon-trash" }, { icon: "icon-eye-on" }],
  },
]);
</script>
