<template>
  <!-- Title -->
  <SubSectionHeading headingName="Applicants Alerts" />

  <!-- Table -->
  <Table :fieldList="fieldList">
    <ResumeAlertTableRow v-for="job in filterJobsByEmployerId" :job="job" />
  </Table>
</template>

<script setup>
import { ref, provide } from "vue";
import { useJobsStore } from "../../stores/jobStore";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import SubSectionHeading from "../../components/local-components/dashboard/SubSectionHeading.vue";
import ResumeAlertTableRow from "../../components/local-components/dashboard/employer/ResumeAlertTableRow.vue";
import Table from "../../components/local-components/dashboard/Table.vue";

// State
const jobStore = useJobsStore();
const jobSeekerStore = useJobseekersStore();
const filterJobsByEmployerId = jobStore.jobList;
const filterApplicantsByJobId = jobSeekerStore.jobseekersList;
// console.log(filterJobsByEmployerId);

const fieldList = ref(["Job Title", "Applicant Details", "times", "Action"]);
</script>
