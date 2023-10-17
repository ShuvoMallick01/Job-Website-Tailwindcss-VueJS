<template>
  <!-- Title -->
  <SubSectionHeading :subHeading="subHeadingList[0]" />

  <!-- Table -->
  <AlertTable :fieldList="fieldList">
    <AlertTableRow v-for="alertItem in adminAlertList" :alertItem="alertItem" />
  </AlertTable>
</template>

<script setup>
import { ref, provide } from "vue";
import AlertTable from "../../components/dashboard/AlertTable.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import AlertTableRow from "../../components/dashboard/AlertTableRow.vue";

// State
const fieldList = ref(["Job Title", "Criteria", "Created", "Action"]);
const subHeadingList = ref([
  {
    title: "Resume Alerts",
    btnTitle: "",
    btnIcon: "",
  },
]);

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
