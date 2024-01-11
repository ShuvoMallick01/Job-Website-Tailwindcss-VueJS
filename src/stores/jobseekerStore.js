import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useJobsStore } from "./jobStore";
import { useAuthsStore } from "./authStore";

export const useJobseekersStore = defineStore("jobseekers", () => {
  // STATE
  const jobStore = useJobsStore();
  const authStore = useAuthsStore();
  const jobseekersList = ref([
    {
      id: 1,
      jobseekerId: 1,
      role: "jobseeker",
      name: "Shuvo Mallick",
      image: "../../src/assets/images/user-profile-pic-1.jpg",
      profession: "Web Developer",
      language: ["Bengali", "English"],
      age: 27,
      currentSalary: 2000,
      expectedSalary: 3000,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      phone: "0123456789",
      country: "Bangladesh",
      fullAddress: "Rangunia, Chittagong",
      favoriteJobId: [1, 3, 4],
      appliedJobId: [2, 5],
    },
    {
      id: 2,
      jobseekerId: 2,
      role: "jobseeker",
      name: "Nabed Khan",
      image: "../../src/assets/images/user-profile-pic-2.jpg",
      email: "shuvo@gmail.com",
      password: "jobseeker",
      profession: "Web Developer",
      language: ["Bengali", "English"],
      age: 27,
      currentSalary: 2000,
      expectedSalary: 3000,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      phone: "0123456789",
      country: "Bangladesh",
      fullAddress: "Rangunia, Chittagong",
      favoriteJobId: [1, 3, 4],
      appliedJobId: [2, 5],
    },
    {
      id: 3,
      jobseekerId: 3,
      role: "jobseeker",
      name: "Nabed Khan",
      image: "../../src/assets/images/user-profile-pic-2.jpg",
      profession: "Web Developer",
      language: ["Bengali", "English"],
      age: 27,
      currentSalary: 2000,
      expectedSalary: 3000,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      phone: "0123456789",
      country: "Bangladesh",
      fullAddress: "Rangunia, Chittagong",
      favoriteJobId: [1, 3, 4],
      appliedJobId: [2, 5],
    },
  ]);

  const resumeList = ref([
    {
      jobseekerId: 1,
      cvVersion: "CV Version 1.0",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      education: [
        {
          id: 1,
          title: "Bachelor of Science in CSE",
          institute: "University of Science & Technology",
          description: "Lorem ipsum dolor, sit amet consectetur",
          duration: "2017-2021",
        },
        {
          id: 2,
          title: "Computer Technology",
          institute: "Islami Bank Institute of Technology",
          description: "Lorem ipsum dolor, sit amet consectetur",
          duration: "2012-2017",
        },
      ],

      workExperience: [
        {
          id: 1,
          title: "Product Designer",
          institute: "Spotify Inc",
          description: "Lorem ipsum dolor, sit amet consectetur",
          duration: "2017-2021",
        },
        {
          id: 2,
          title: "Vue.js Developer",
          institute: "Bit Skyber",
          description: "Lorem ipsum dolor, sit amet consectetur",
          duration: "2021-2023",
        },
      ],

      skills: ["vuejs", "javascript", "reactjs"],
    },

    {
      jobseekerId: 2,
      cvVersion: "CV Version 1.0",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      education: [
        {
          id: 1,
          title: "Bachelor of Science in CSE",
          institute: "University of Science & Technology",
          description: "Lorem ipsum dolor, sit amet consectetur",
          duration: "2017-2021",
        },
        {
          id: 2,
          title: "Computer Technology",
          institute: "Islami Bank Institute of Technology",
          description: "Lorem ipsum dolor, sit amet consectetur",
          duration: "2012-2017",
        },
      ],

      workExperience: [
        {
          id: 1,
          title: "Product Designer",
          institute: "Spotify Inc",
          description: "Lorem ipsum dolor, sit amet consectetur",
          duration: "2017-2021",
        },
        {
          id: 2,
          title: "Vue.js Developer",
          institute: "Bit Skyber",
          description: "Lorem ipsum dolor, sit amet consectetur",
          duration: "2021-2023",
        },
      ],

      skills: ["vuejs", "javascript", "reactjs"],
    },
  ]);

  // METHODS
  // const handleFilterSavedJobs = (userId) => {
  //   if (jobseekersList.value[0].id === userId) {
  //     const savedJobList = jobStore.jobList.filter(
  //       (job) => job.isFavorite == true
  //     );
  //     // console.log(savedJobList);
  //     return savedJobList;
  //   } else {
  //     console.log("Not Found any Data");
  //   }
  // };

  // Filter Saved Jobs by User
  const handleFilterSavedJobsByUser = computed(() => {
    return jobStore.jobList.filter(
      (item) =>
        item.isFavorite &&
        item.applicantsId.includes(JSON.parse(localStorage.getItem("user")).id)
    );
  });

  // Filter Applied Jobs by User
  const handleFilterAppliedJobsByUser = computed(() => {
    return jobStore.jobList.filter(
      (item) =>
        item.jobApplyStatus &&
        item.applicantsId.includes(JSON.parse(localStorage.getItem("user")).id)
    );
  });

  return {
    jobseekersList,
    resumeList,
    handleFilterAppliedJobsByUser,
    handleFilterSavedJobsByUser,
  };
});
