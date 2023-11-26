<template>
  <!-- Title -->
  <SubSectionHeading headingName="Job Alerts" />

  <!-- Table -->
  <Table :fieldList="fieldList">
    <AlertTableRow v-for="item in jobList" :item="item" />
  </Table>
</template>

<!-- SCRIPT -->
<script setup>
import { ref, provide } from "vue";
import { useJobsStore } from "../../stores/jobStore";
import Table from "../../components/dashboard/Table.vue";
import AlertTableRow from "../../components/dashboard/jobseeker/AlertTableRow.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";

const jobStore = useJobsStore();
const jobList = jobStore.jobList;
const fieldList = ref(["Job Title", "Criteria", "Created", "Action"]);
</script>
