<template>
  <!-- Title -->
  <SubSecHeading headingTitle="Job Alerts" divClassName="mb-8 pb-3 border-b" />

  <!-- Table -->
  <Table :fieldList="fieldList">
    <AlertTableRow v-for="item in jobList" :item="item" />
  </Table>
</template>

<script setup>
import { ref, provide } from "vue";
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
import Table from "../../components/dashboard/Table.vue";
import AlertTableRow from "../../components/dashboard/AlertTableRow.vue";
import { useJobsStore } from "../../stores/jobStore";

// State
const jobStore = useJobsStore();
const jobList = jobStore.jobList;
const fieldList = ref(["Job Title", "Criteria", "Created", "Action"]);
</script>
