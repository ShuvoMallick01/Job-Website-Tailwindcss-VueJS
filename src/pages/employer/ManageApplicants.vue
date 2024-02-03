<template>
  <SubSectionHeading headingName="Manage Applicants">
    <div class="flex gap-2">
      <FormSelect
        v-if="getJobTitleList"
        :optionList="getJobTitleList"
        v-model="selectedJobId"
        @change="handleSelectJob(selectedJobId)"
      />
    </div>
  </SubSectionHeading>

  <div
    class="flex gap-2 flex-shrink-0 pt-3 pb-6 whitespace-nowrap items-center justify-between"
  >
    <h4>Job Title: {{ selectedJob.jobTitle }}</h4>

    <div
      v-if="Object.entries(jobStore.jobData).length > 0"
      class="w-full flex gap-2 description-sm-text flex-wrap justify-end"
    >
      <Badge
        color="gray"
        :title="'Total(s): ' + jobStore.jobData.applicantsId.length"
      />
      <Badge
        color="gray"
        :title="'Approved: ' + jobStore.jobData.approvedApplicantsId.length"
      />
      <Badge
        color="gray"
        :title="'Rejected: ' + jobStore.jobData.rejectedApplicantsId.length"
      />
    </div>
  </div>

  <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
    <ApplicantsCard
      v-for="applicant in jobseekerStore.jobseekerListByJob"
      :applicant="applicant"
      :applicantId="applicant.jobseekerId"
    />
  </div>
</template>

<!-- SCRIPT -->
<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import { useJobsStore } from "../../stores/jobStore";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import { useResumeStore } from "../../stores/resumeStore";
import ApplicantsCard from "../../components/dashboard/employer/ApplicantsCard.vue";
import FormSelect from "../../components/form/FormSelect.vue";
import Badge from "../../components/Badge/Badge.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import { useAuthsStore } from "../../stores/authStore";

// STATE
const jobStore = useJobsStore();
const authStore = useAuthsStore();
const jobseekerStore = useJobseekersStore();
const resumeStore = useResumeStore();
const selectedJobId = ref(1);
const selectedJob = ref({});

// METHODS
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

// Get Job
const handleSelectJob = async (id) => {
  if (id) {
    await jobStore.getJob(id);
    selectedJob.value = jobStore.jobData;
    if (Object.entries(jobStore.jobData).length > 0) {
      console.log(jobStore.jobData.applicantsId);
      await jobseekerStore.getJobseekerListByJob(jobStore.jobData.applicantsId);
    }
  }
};

onMounted(() => {
  jobseekerStore.getJobseekerList();
  resumeStore.getResumeList();
  jobStore.getJobList();
  handleSelectJob(selectedJobId.value);
});
</script>
