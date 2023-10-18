<template>
  <div class="pb-4 mb-5 flex justify-between items-center border-b">
    <SubSecHeading headingTitle="mANAGE jOBS" />

    <div class="flex items-center">
      <p class="whitespace-nowrap me-2 description-text">Sort by Freshness</p>
      <FormSelect :optionList="formSelectList[0]" />
    </div>
  </div>

  <!-- Table -->
  <Table :fieldList="fieldList">
    <JobManageTableRow v-for="job in ownJobList" :item="job" />
  </Table>
</template>

<script setup>
import { ref } from "vue";
import JobManageTableRow from "../../components/dashboard/JobManageTableRow.vue";
import FormSelect from "../../components/form/FormSelect.vue";
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
import Table from "../../components/dashboard/Table.vue";
import { useEmployesStore } from "../../stores/employerStore";

// State
const employerStore = useEmployesStore();
const ownJobList = employerStore.handleEmployerJobs(1);
const fieldList = ref(["Job Title", "Applications", "Status", "Action"]);
const formSelectList = ref([
  [
    { title: "Filter by Months", value: "" },
    { title: "Last 3 Months", value: 3 },
    { title: "Last 6 Months", value: 6 },
    { title: "Last 9 Months", value: 9 },
    { title: "Last 12 Months", value: 12 },
  ],
]);
</script>
