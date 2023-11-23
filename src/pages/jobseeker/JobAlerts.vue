<template>
  <!-- Title -->
  <SubSectionHeading headingName="Job Alerts" />

  <!-- Table -->
  <Table :fieldList="fieldList">
    <AlertTableRow v-for="item in jobList" :item="item" />
  </Table>
</template>

<script setup>
import { ref, provide } from "vue";
import { useJobsStore } from "../../stores/jobStore";
import Table from "../../components/local-components/dashboard/Table.vue";
import AlertTableRow from "../../components/local-components/dashboard/jobseeker/AlertTableRow.vue";
import SubSectionHeading from "../../components/local-components/dashboard/SubSectionHeading.vue";

// State
const jobStore = useJobsStore();
const jobList = jobStore.jobList;
const fieldList = ref(["Job Title", "Criteria", "Created", "Action"]);
</script>
