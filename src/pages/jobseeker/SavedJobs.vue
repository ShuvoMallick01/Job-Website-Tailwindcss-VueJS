<template>
  <!-- Title -->
  <SubSecHeading headingTitle="SAVED JOBS" divClassName="mb-8 pb-3 border-b" />

  <!-- Card -->
  <JobPostCard :jobList="savedJobsList"></JobPostCard>
</template>

<script setup>
import { ref } from "vue";
import JobPostCard from "../../components/JobPostCard.vue";
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";

// State
const jobStore = useJobseekersStore();
const jobList = ref([
  {
    id: 1,
    companyName: "Facebook",
    jobTitle: "Senior Ract Developer",
    isRemote: true,
    jobType: "Full time",
    jobRole: "Programming",
    location: "Bangladesh",
    createdAt: "3hr ago",
    salary: "2000",
    jobApplyStatus: false,
    isFavorite: true,
    adminId: 1,
  },
  {
    id: 2,
    companyName: "Facebook",
    jobTitle: "Senior Ract Developer",
    isRemote: true,
    jobType: "Full time",
    jobRole: "Programming",
    location: "Bangladesh",
    createdAt: "3hr ago",
    salary: "2000",
    jobApplyStatus: false,
    isFavorite: true,
    adminId: 1,
  },
  {
    id: 3,
    companyName: "Facebook",
    jobTitle: "Senior Ract Developer",
    isRemote: true,
    jobType: "Full time",
    jobRole: "Programming",
    location: "Bangladesh",
    createdAt: "3hr ago",
    salary: "2000",
    jobApplyStatus: false,
    isFavorite: true,
    adminId: 1,
  },
  {
    id: 4,
    companyName: "Facebook",
    jobTitle: "Senior Ract Developer",
    isRemote: true,
    jobType: "Full time",
    jobRole: "Programming",
    location: "Bangladesh",
    createdAt: "3hr ago",
    salary: "2000",
    jobApplyStatus: false,
    isFavorite: true,
    adminId: 1,
  },
]);
const savedJobsList = jobStore.handleFilterSavedJobs(1);
</script>
