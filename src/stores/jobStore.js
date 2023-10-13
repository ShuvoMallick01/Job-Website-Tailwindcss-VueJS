import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useJobsStore = defineStore("jobs", () => {
  const filterJobList = reactive({
    jobType: [""],
    JobRole: [""],
    remoteOnly: true,
    salaryRange: [""],
    location: "",
  });

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
      isFavorite: false,
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
      isFavorite: false,
      adminId: 1,
    },
    {
      id: 5,
      companyName: "Facebook",
      jobTitle: "Senior Ract Developer",
      isRemote: true,
      jobType: "Full time",
      jobRole: "Programming",
      location: "Bangladesh",
      createdAt: "3hr ago",
      salary: "2000",
      jobApplyStatus: false,
      isFavorite: false,
      adminId: 1,
    },
  ]);

  return { filterJobList, jobList };
});
