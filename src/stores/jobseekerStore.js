import { defineStore } from "pinia";
import { ref } from "vue";

export const useJobseekersStore = defineStore("jobseekers", () => {
  const jobseekersList = ref([
    {
      id: 1,
      role: "jobseeker",
      name: "Shuvo Mallick",
      image: "../src/assets/images/user-profile-pic-1.jpg",
      email: "shuvo@gmail.com",
      password: "",
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
      role: "jobseeker",
      name: "Shuvo Mallick",
      image: "../src/assets/images/user-profile-pic-1.jpg",
      email: "shuvo@gmail.com",
      password: "",
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

  return { jobseekersList };
});
