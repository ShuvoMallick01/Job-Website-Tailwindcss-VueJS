<template>
  <!-- Title -->
  <SubSecHeading
    headingTitle="Applicants Alerts"
    divClassName="mb-8 pb-3 border-b"
  />

  <!-- Table -->
  <AlertTable :fieldList="fieldList">
    <ResumeAlertTableRow v-for="job in filterJobsByEmployerId" :job="job" />
  </AlertTable>
</template>

<script setup>
import { ref, provide } from "vue";
import { useJobsStore } from "../../stores/jobStore";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import AlertTable from "../../components/dashboard/Table.vue";
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
import ResumeAlertTableRow from "../../components/dashboard/ResumeAlertTableRow.vue";

// State
const jobStore = useJobsStore();
const jobSeekerStore = useJobseekersStore();
const filterJobsByEmployerId = jobStore.jobList;
const filterApplicantsByJobId = jobSeekerStore.jobseekersList;
// console.log(filterJobsByEmployerId);

const fieldList = ref(["Job Title", "Applicant Details", "times", "Action"]);
</script>
