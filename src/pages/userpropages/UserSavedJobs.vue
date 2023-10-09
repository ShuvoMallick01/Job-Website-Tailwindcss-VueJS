<template>
  <!-- Title -->
  <SubSectionHeading :subHeading="subHeadingList[0]" />
  <!-- Card -->
  <JobPostCard :jobList="jobList"></JobPostCard>
</template>

<script setup>
import { ref } from "vue";
import JobPostCard from "../../components/JobPostCard.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";

// State
const subHeadingList = ref([
  {
    title: "Saved Jobs",
    btnTitle: "",
    btnIcon: "",
  },
]);

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
</script>
