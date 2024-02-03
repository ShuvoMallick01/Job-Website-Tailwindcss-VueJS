<template>
  <!-- Title -->
  <SubSectionHeading headingName="Applicants Alerts" />

  <!-- Table -->
  <Table :fieldList="fieldList">
    <ResumeAlertTableRow
      v-for="job in employerStore.getJobsByEmployer"
      :job="job"
    />
  </Table>
</template>

<script setup>
import { ref, provide, onMounted } from "vue";
import { useJobsStore } from "../../stores/jobStore";
import { useEmployesStore } from "../../stores/employerStore";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import ResumeAlertTableRow from "../../components/dashboard/employer/ResumeAlertTableRow.vue";
import Table from "../../components/dashboard/Table.vue";
// State
const jobStore = useJobsStore();
const employerStore = useEmployesStore();

const fieldList = ref(["Job Title", "Applicant Details", "times", "Action"]);

onMounted(() => {
  jobStore.getJobList();
});
</script>
