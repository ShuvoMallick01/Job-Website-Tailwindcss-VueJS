<template>
  <div class="mb-5 border-b pb-4 flex justify-between items-center gap-4">
    <SubSecHeading headingTitle="Shortlisted Resumes" />
    <div class="flex gap-2 flex-wrap xl:flex-nowrap justify-end">
      <form>
        <FormSearchbox />
      </form>

      <FormSelect :optionList="formSelectList[0]" />
    </div>
  </div>

  <div
    class="flex gap-2 flex-shrink-0 pt-3 pb-6 whitespace-nowrap items-center justify-between"
  >
    <h4 class="heading-regular">{{ selectedJob.jobTitle }}</h4>

    <div class="flex gap-2 description-sm-text flex-wrap justify-end">
      <Button
        isButton="true"
        :title="'Total(s): ' + selectedJob.applicantsId.length"
        className="btn-sm-text"
      />
      <Button
        isButton="true"
        :title="'Approved: ' + selectedJob.approvedApplicantsId.length"
        className="btn-sm-text"
      />
      <Button
        isButton="true"
        :title="'Rejected: ' + selectedJob.rejectedApplicantsId.length"
        className="btn-sm-text"
      />
    </div>
  </div>

  <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
    <ApplicantsCard
      :applicant="filterApplicantsByJob"
      :resume="filterResumeByJobseId"
    />
    <ApplicantsCard
      :applicant="filterApplicantsByJob"
      :resume="filterResumeByJobseId"
    />
    <ApplicantsCard
      :applicant="filterApplicantsByJob"
      :resume="filterResumeByJobseId"
    />
    <ApplicantsCard
      :applicant="filterApplicantsByJob"
      :resume="filterResumeByJobseId"
    />
    <!-- v-for="item in filterApplicantsByJob" -->
    <!-- :key="item.applicantId" -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import ApplicantsCard from "../../components/dashboard/ApplicantsCard.vue";
import FormSelect from "../../components/form/FormSelect.vue";
import FormSearchbox from "../../components/form/FormSearchbox.vue";
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
import Button from "../../components/buttons/Button.vue";
import { useJobsStore } from "../../stores/jobStore";
import { useJobseekersStore } from "../../stores/jobseekerStore";

// State
const jobStore = useJobsStore();
const jobseekerStore = useJobseekersStore();
const selectedJob = jobStore.jobList[0];
const filterApplicantsByJob = jobseekerStore.jobseekersList[0];
const filterResumeByJobseId = jobseekerStore.resumeList[0];

const formSelectList = ref([
  [
    { title: "Select Jobs", value: "" },
    { title: "Last 3 Months", value: 3 },
    { title: "Last 6 Months", value: 6 },
    { title: "Last 9 Months", value: 9 },
    { title: "Last 12 Months", value: 12 },
  ],
  [
    { title: "All Status", value: "" },
    { title: "Total", value: "total" },
    { title: "Approved", value: "approved" },
    { title: "Rejected", value: "rejected" },
  ],
]);
</script>
