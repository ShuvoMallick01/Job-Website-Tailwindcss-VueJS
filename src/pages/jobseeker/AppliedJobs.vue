<template>
  <!-- Title -->
  <SubSectionHeading :subHeading="subHeadingList[0]" />

  <!-- Card -->
  <JobPostCard :jobList="jobList" />
</template>

<script setup>
import { ref } from "vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import JobPostCard from "../../components/JobPostCard.vue";

// State
const subHeadingList = ref([
  {
    title: "Applied Jobs",
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
    jobApplyStatus: true,
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
    jobApplyStatus: true,
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
    jobApplyStatus: true,
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
    jobApplyStatus: true,
    isFavorite: true,
    adminId: 1,
  },
]);
</script>
