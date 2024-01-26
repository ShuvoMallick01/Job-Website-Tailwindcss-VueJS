import { defineStore } from "pinia";
import { ref } from "vue";
import { useJobsStore } from "./jobStore";
import { useAuthsStore } from "./authStore";
import axios from "axios";

export const useEmployesStore = defineStore("employes", () => {
  // STATE
  const jobStore = useJobsStore();
  const authsStore = useAuthsStore();
  const companyProfileList = ref([]);
  const companyProfile = ref({});
  let loading = ref(false);

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
    try {
      loading.value = true;
      const { data } = await axios.get("/company-profile", {
        params: { id: id },
      });

      companyProfile.value = data.data;
    } catch (error) {
      console.log(error.response.data);
    } finally {
      loading.value = false;
    }
  };

  const updteCompanyProfile = async (payload, id) => {
    try {
      loading.value = true;
      const { data } = await axios.post("/company-profile", payload, {
        params: { id: id },
      });

      console.log(data.data);
      companyProfile.value = data.data;
    } catch (error) {
      console.log(error);
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
    loading,
    updteCompanyProfile,
  };
});
