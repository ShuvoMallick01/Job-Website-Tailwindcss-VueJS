import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useJobsStore = defineStore("jobs", () => {
  // State
  const filterJobList = reactive({
    jobType: [],
    JobRole: [],
    remoteOnly: false,
    salaryRange: [],
    location: [],
  });

  let jobList = reactive([
    {
      id: 1,
      companyName: "Meta Corporation",
      jobTitle: "Senior React Developer",
      jobType: "Full-Time",
      jobRole: "Programming",
      location: "Bangladesh",
      isRemote: true,
      createdAt: "3hr ago",
      salary: "2000",
      jobApplyStatus: true,
      isFavorite: true,
      adminId: 1,
    },
    {
      id: 2,
      companyName: "Bit Skyber ltd.",
      jobTitle: "Web Developer",
      jobType: "Part-Time",
      jobRole: "Design",
      location: "United State",
      isRemote: false,
      createdAt: "3hr ago",
      salary: "40000",
      jobApplyStatus: false,
      isFavorite: true,
      adminId: 1,
    },
    {
      id: 3,
      companyName: "Info Sys",
      jobTitle: "Data Scientist",
      jobType: "Internship",
      jobRole: "Management",
      location: "Canada",
      isRemote: true,
      createdAt: "3hr ago",
      salary: "1000",
      jobApplyStatus: false,
      isFavorite: false,
      adminId: 1,
    },
    {
      id: 4,
      companyName: "Google Incorporation",
      jobTitle: "Blockchain Developer",
      jobType: "Full Time",
      jobRole: "Contract",
      location: "Europe",
      isRemote: true,
      createdAt: "3hr ago",
      salary: "2000",
      jobApplyStatus: false,
      isFavorite: false,
      adminId: 1,
    },
  ]);

  // Methods
  const handleJobFavorite = (id) => {
    let newJobList = jobList.map((job) =>
      job.id === id
        ? {
            ...job,
            isFavorite: !job.isFavorite,
          }
        : job
    );
    console.log(newJobList[3]);
  };

  return { filterJobList, jobList, handleJobFavorite };
});
