<template>
  <SubSectionHeading headingName="Manage Jobs">
    <div class="flex items-center">
      <p class="whitespace-nowrap me-2 description-text">Sort by Freshness</p>
      <FormSelect :optionList="formSelectList[0]" />
    </div>
  </SubSectionHeading>

  <!-- Table -->
  <Table :fieldList="fieldList">
    <span><JobManageTableRow v-for="job in ownJobList" :item="job" /></span>
  </Table>
</template>

<!-- SCRIPT -->
<script setup>
import { ref, onMounted } from "vue";
import { useEmployesStore } from "../../stores/employerStore";
import { useJobsStore } from "../../stores/jobStore";
import JobManageTableRow from "../../components/dashboard/employer/JobManageTableRow.vue";
import FormSelect from "../../components/form/FormSelect.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import Table from "../../components/dashboard/Table.vue";

const employerStore = useEmployesStore();
const jobStore = useJobsStore();
const ownJobList = employerStore.handleEmployerJobs();
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

// Methods
onMounted(() => {
  jobStore.getJobList();
});
</script>
