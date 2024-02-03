<template>
  <!-- Title -->
  <SubSectionHeading headingName="Job Alerts" />

  <!-- Table -->
  <Table :fieldList="fieldList">
    <AlertTableRow
      v-for="item in jobseekerStore.handleAlertJobsByUser"
      :item="item"
      @deleteAlert="handleAlertDelete"
      class="left-0"
    />
  </Table>
</template>

<!-- SCRIPT -->
<script setup>
import { ref, provide, onMounted } from "vue";
import { useJobsStore } from "../../stores/jobStore";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import Table from "../../components/dashboard/Table.vue";
import AlertTableRow from "../../components/dashboard/jobseeker/AlertTableRow.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";

// State
const jobStore = useJobsStore();
const jobseekerStore = useJobseekersStore();
const jobList = jobStore.jobList;
const fieldList = ref(["Job Title", "Criteria", "Created", "Action"]);
const { getJobList } = useJobsStore();

const handleAlertDelete = (userId) => {
  return jobseekerStore.handleAlertJobsDeleteByUser(userId);
};

onMounted(() => {
  getJobList();
});
</script>
