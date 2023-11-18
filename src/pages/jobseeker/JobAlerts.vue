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
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
import Table from "../../components/dashboard/Table.vue";
import AlertTableRow from "../../components/dashboard/AlertTableRow.vue";
import { useJobsStore } from "../../stores/jobStore";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";

// State
const jobStore = useJobsStore();
const jobList = jobStore.jobList;
const fieldList = ref(["Job Title", "Criteria", "Created", "Action"]);
</script>
