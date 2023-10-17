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
const fieldList = ref(["Job Title", "Applicant Details", "times", "Action"]);
const subHeadingList = ref([
  {
    title: "Applicants Alerts",
    btnTitle: "",
    btnIcon: "",
  },
]);
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
  {
    id: 4,
    jobTitle: "Senior React JS Developer",
    jobCategory: ["Remote", "Full time"],
    applicantInfo: ["Shuvo Mallick", "B.Sc", "Bangladesh"],
    times: "1 hr",
    actions: [{ icon: "icon-trash" }],
  },
  {
    id: 5,
    jobTitle: "Senior React JS Developer",
    jobCategory: ["Remote", "Full time"],
    applicantInfo: ["Shuvo Mallick", "B.Sc", "Bangladesh"],
    times: "1 hr",
    actions: [{ icon: "icon-trash" }],
  },
]);
</script>
