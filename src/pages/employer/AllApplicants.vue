<template>
  <SubSectionHeading headingName="Manage Applicants">
    <div class="flex gap-2">
      <FormSelect
        v-if="getJobTitleList"
        :optionList="getJobTitleList"
        v-model="selectedJobId"
      />
    </div>
    {{ getSelectedJob }}
  </SubSectionHeading>

  <div
    class="flex gap-2 flex-shrink-0 pt-3 pb-6 whitespace-nowrap items-center justify-between"
  >
    <!-- <h4>{{ selectedJob.jobTitle }}</h4> -->

    <div class="flex gap-2 description-sm-text flex-wrap justify-end">
      <!-- <Badge
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
      /> -->
    </div>
  </div>

  <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
    <!-- <ApplicantsCard
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
    /> -->
    <!-- v-for="item in filterApplicantsByJob" -->
    <!-- :key="item.applicantId" -->
  </div>
</template>

<!-- SCRIPT -->
<script setup>
import { ref, onMounted, computed } from "vue";
import { storeToRefs } from "pinia";
import { useJobsStore } from "../../stores/jobStore";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import { useResumeStore } from "../../stores/resumeStore";
import { useEmployesStore } from "../../stores/employerStore";
import ApplicantsCard from "../../components/dashboard/employer/ApplicantsCard.vue";
import FormSelect from "../../components/form/FormSelect.vue";
import Badge from "../../components/Badge/Badge.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import { useAuthsStore } from "../../stores/authStore";

const employerStore = useEmployesStore();
const jobStore = useJobsStore();
const authStore = useAuthsStore();
const { jobList } = storeToRefs(useJobsStore());
const jobseekerStore = useJobseekersStore();
const resumeStore = useResumeStore();
const selectedJob = ref({});
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
  [
    { title: "All Status", value: "" },
    { title: "Total", value: "total" },
    { title: "Approved", value: "approved" },
    { title: "Rejected", value: "rejected" },
  ],
]);
const selectedJobId = ref();

// Get Job title List
const getJobTitleList = computed(() => {
  let getJobTitleList = [];
  let newJobList = jobStore.jobList.filter(
    (job) => job.employerId === authStore.userState.user.id
  );
  if (jobStore.jobList) {
    getJobTitleList = newJobList.map((job) => {
      if (job.employerId === authStore.userState.user.id) {
        return { title: job.jobTitle, value: job.id };
      }
    });
    getJobTitleList.unshift({ title: "Select your job", value: "" });
  } else {
    console.log("Not Found Any Job");
  }
  return getJobTitleList;
});

// Get Applications List
const getApplicationList = computed(() => {});

// Get Selected Job
const getSelectedJob = computed(() => {
  // console.log(selectedJobId.value, jobStore.jobList);
  if (selectedJobId.value && jobStore.jobList) {
    return jobStore.jobList.find((job) => job.id === selectedJobId.value);
  }
});

console.log(getSelectedJob.value);

onMounted(() => {
  jobseekerStore.getJobseekerList();
  resumeStore.getResumeList();
  jobStore.getJobList();
});
</script>
