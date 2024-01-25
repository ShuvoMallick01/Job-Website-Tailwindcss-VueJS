import { defineStore } from "pinia";
import { ref } from "vue";
import { useJobsStore } from "./jobStore";
import { useAuthsStore } from "./authStore";
import axios from "axios";

export const useEmployesStore = defineStore("employes", () => {
  // State
  const jobStore = useJobsStore();
  const authsStore = useAuthsStore();
  const loading = ref(false);
  // const companyProfileList = ref([
  //   {
  //     id: 1,
  //     employerId: 1,
  //     name: "Employer",
  //     profession: "Employeer",
  //     companyName: "Bit Skyber",
  //     comapnyEmail: "comapny@gmail.com",
  //     phone: 880123456789,
  //     image: "../../src/assets/images/user-profile-pic-1.jpg",
  //     website: "www.bitskyber.com",
  //     estSince: 2010,
  //     teamSize: 20,
  //     aboutCompany:
  //       "LorenThe Role and Category Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur? Ducimus.",
  //     facebook: "www.facebook.com/bitskyber",
  //     linkedin: "www.linkedin.com/bitskyber",
  //     country: "Bangladesh",
  //     city: "Chittagong",
  //     completeAddress: "120/55, Oxyzen, SitalJarna",
  //   },
  //   {
  //     id: 2,
  //     employerId: 2,
  //     name: "Employer",
  //     comapnyEmail: "comapny@gmail.com",
  //     profession: "Employeer",
  //     companyName: "Bit Skyber",
  //     image: "../../src/assets/images/user-profile-pic-1.jpg",
  //     phone: "+880123456789",
  //     website: "www.bitskyber.com",
  //     estSince: 2010,
  //     teamSize: 20,
  //     aboutCompany:
  //       "LorenThe Role and Category Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur? Ducimus.",
  //     facebook: "www.facebook.com/bitskyber",
  //     linkedin: "www.linkedin.com/bitskyber",
  //     country: "Bangladesh",
  //     city: "Chittagong",
  //     completeAddress: "120/55, Oxyzen, SitalJarna",
  //   },
  // ]);

  // METHODS
  const companyProfileList = ref([]);
  const companyProfile = ref({});

  // METHODS
  const handleEmployerJobs = () => {
    if (authsStore.isAuthenticated) {
      const employerJobs = jobStore.jobList.filter(
        (job) => job.employerId === authsStore.userState.user.id
      );
      if (employerJobs.length === 0) {
        console.log("Data Not Found");
        return;
      }
      return employerJobs;
    } else {
      console.log("Not Found any employerId");
    }

    // if (jobStore.jobList.employerId === employerId) {
    //   const appliedJobList = jobStore.jobList.filter(
    //     (job) => job.jobApplyStatus === true
    //   );
    //   console.log(appliedJobList);
    //   return appliedJobList;
    // } else {
    //   console.log("Not Found any Data");
    // }
  };

  const getCompanyProfiles = async () => {
    try {
      loading.value = true;
      const { data } = await axios.get("/company-profiles");
      console.log(data);
      companyProfileList.value = data.data;
    } catch (error) {
      console.log(error.response.data);
    } finally {
      loading.value = false;
    }
  };

  const getComapnyProfile = async (id) => {
    // console.log(id);
    try {
      loading.value = true;
      const { data } = await axios.get("/company-profile", {
        params: { id: id },
      });
      // console.log(data.data);
      companyProfile.value = data.data;
    } catch (error) {
      console.log(error.response.data);
    } finally {
      loading.value = false;
    }
  };

  return {
    companyProfileList,
    handleEmployerJobs,
    getCompanyProfiles,
    getComapnyProfile,
    companyProfile,
  };
});
