<template>
  <SubSectionHeading headingName="Shortlisted Resumes">
    <div class="flex gap-2 flex-wrap xl:flex-nowrap justify-end">
      <FormInput
        placeholder="Search.."
        size="medium-search"
        inputClasses="relative"
      >
        <template #prefix
          ><i
            class="icon-search absolute left-0 h-full items-center flex p-3"
          ></i
        ></template>
      </FormInput>

      <FormSelect :optionList="formSelectList[0]" />
    </div>
  </SubSectionHeading>

  <div
    v-if="selectedJob.length > 0"
    class="flex gap-2 flex-shrink-0 pt-3 pb-6 whitespace-nowrap items-center justify-between"
  >
    <h4>{{ selectedJob.jobTitle }}</h4>

    <div class="flex gap-2 description-sm-text flex-wrap justify-end">
      <Badge
        color="gray"
        :title="'Total(s): ' + selectedJob.applicantsId.length"
      />
      <Badge
        color="gray"
        :title="'Approved: ' + selectedJob.approvedApplicantsId.length"
      />
      <Badge
        color="gray"
        :title="'Rejected: ' + selectedJob.rejectedApplicantsId.length"
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

<!-- SCRIPT -->
<script setup>
import { ref, onMounted, computed } from "vue";
import { useJobsStore } from "../../stores/jobStore";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import FormInput from "../../components/form/FormInput.vue";
import Badge from "../../components/Badge/Badge.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import ApplicantsCard from "../../components/dashboard/employer/ApplicantsCard.vue";
import FormSelect from "../../components/form/FormSelect.vue";
import { useResumeStore } from "../../stores/resumeStore";

// State
const jobStore = useJobsStore();
const jobseekerStore = useJobseekersStore();
const resumeStore = useResumeStore();

const filterApplicantsByJob = jobseekerStore.jobseekersList[0];
const filterResumeByJobseId = resumeStore.resumeList[0];

const formSelectList = ref([
  [
    { title: "Select Jobs", value: "" },
    { title: "Last 3 Months", value: 3 },
    { title: "Last 6 Months", value: 6 },
    { title: "Last 9 Months", value: 9 },
    { title: "Last 12 Months", value: 12 },
  ],
]);

const selectedJob = computed(() => {
  if (jobStore.jobList) {
    return jobStore.jobList;
  }
});

console.log(selectedJob.value);

onMounted(() => {
  resumeStore.getResumeList();
  jobStore.getJobList();
  jobseekerStore.getJobseekerList();
});
</script>
