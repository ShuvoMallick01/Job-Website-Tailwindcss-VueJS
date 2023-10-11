<template>
  <h2 class="heading-paragraph mb-5 border-b pb-4 uppercase">Resume Alerts</h2>

  <AlertTable :fieldList="fieldList" :alertList="adminAlertList" />
</template>

<script setup>
import { ref, provide } from "vue";
import AlertTable from "../../components/dashboard/AlertTable.vue";

// State
const fieldList = ref(["Job Title", "Applicant Details", "times", "Action"]);
const adminAlertList = ref([
  {
    id: 1,
    jobTitle: "Senior React JS Developer",
    jobCategory: ["Remote", "Full time"],
    applicantInfo: ["Shuvo Mallick", "B.Sc", "Bangladesh"],
    times: "1 hr",
    actions: [{ icon: "icon-trash" }],
  },
  {
    id: 2,
    jobTitle: "Senior React JS Developer",
    jobCategory: ["Remote", "Full time"],
    applicantInfo: ["Shuvo Mallick", "B.Sc", "Bangladesh"],
    times: "1 hr",
    actions: [{ icon: "icon-trash" }],
  },
  {
    id: 3,
    jobTitle: "Senior React JS Developer",
    jobCategory: ["Remote", "Full time"],
    applicantInfo: ["Shuvo Mallick", "B.Sc", "Bangladesh"],
    times: "1 hr",
    actions: [{ icon: "icon-trash" }],
  },
]);
</script>
