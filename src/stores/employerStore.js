import { defineStore } from "pinia";
import { ref } from "vue";
import { useJobsStore } from "./jobStore";

export const useEmployesStore = defineStore("employes", () => {
  // State
  const jobStore = useJobsStore();
  const companyProfileList = ref([
    {
      id: 1,
      employerId: 1,
      companyName: "Bit Skyber",
      email: "bitskyber@gmail.com",
      password: "employer",
      phone: 880123456789,
      website: "www.bitskyber.com",
      estSince: 2010,
      teamSize: 20,
      aboutCompany:
        "LorenThe Role and Category Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur? Ducimus.",
      facebook: "www.facebook.com/bitskyber",
      linkedin: "www.linkedin.com/bitskyber",
      country: "Bangladesh",
      city: "Chittagong",
      completeAddress: "120/55, Oxyzen, SitalJarna",
    },
    {
      id: 2,
      employerId: 1,
      companyName: "Bit Skyber",
      email: "bitskyber@gmail.com",
      password: "employer",
      phone: "+880123456789",
      website: "www.bitskyber.com",
      estSince: 2010,
      teamSize: 20,
      aboutCompany:
        "LorenThe Role and Category Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, quis atque. Adipisci eum quidem eveniet sint facere, minus earum, maiores iusto, perferendis quae perspiciatis blanditiis cum quaerat facilis magni est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio nihil quidem consequatur quos sunt! Ullam rem quaerat vel, ut quidem culpa eos qui voluptatum. Aliquam veniam animi tenetur? Ducimus.",
      facebook: "www.facebook.com/bitskyber",
      linkedin: "www.linkedin.com/bitskyber",
      country: "Bangladesh",
      city: "Chittagong",
      completeAddress: "120/55, Oxyzen, SitalJarna",
    },
  ]);

  // METHODS
  const handleEmployerJobs = (employerId) => {
    if (employerId) {
      const employerJobs = jobStore.jobList.filter(
        (job) => job.employerId === employerId
      );
      if (!employerJobs.length) {
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

  return { companyProfileList, handleEmployerJobs };
});
