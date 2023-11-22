<template>
  <SubSectionHeading headingName="Manage Jobs">
    <div class="flex items-center">
      <p class="whitespace-nowrap me-2 description-text">Sort by Freshness</p>
      <FormSelect :optionList="formSelectList[0]" />
    </div>
  </SubSectionHeading>

  <!-- Table -->
  <Table :fieldList="fieldList">
    <JobManageTableRow v-for="job in ownJobList" :item="job" />
  </Table>
</template>

<!-- SCRIPT -->
<script setup>
import { ref } from "vue";
import { useEmployesStore } from "../../stores/employerStore";
import JobManageTableRow from "../../components/local-components/dashboard/employer/JobManageTableRow.vue";
import FormSelect from "../../components/form/FormSelect.vue";
import SubSectionHeading from "../../components/local-components/dashboard/SubSectionHeading.vue";
import Table from "../../components/local-components/dashboard/Table.vue";

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
