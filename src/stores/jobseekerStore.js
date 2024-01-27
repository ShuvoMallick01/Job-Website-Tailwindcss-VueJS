import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { useJobsStore } from "./jobStore";
import { useAuthsStore } from "./authStore";
import { useEmployesStore } from "./employerStore";
import axios from "axios";

export const useJobseekersStore = defineStore("jobseekers", () => {
  // STATE
  const jobStore = useJobsStore();
  const authStore = useAuthsStore();
  const employerStore = useEmployesStore;
  const jobseekersList = ref([]);
  const jobseeekerData = ref({});
  const resumeList = ref([]);
  const resume = ref([]);

  // METHODS
  // Get Jobseekers
  const getJobseekerList = async () => {
    try {
      employerStore.loading = true;
      const { data } = await axios.get("/jobseekers-list");
      // console.log(data.data);
      jobseekersList.value = data.data;
    } catch (error) {
      console.log(error);
    } finally {
      employerStore.loading = false;
    }
  };

  // Get Jobseeker
  const getJobseeker = async (id) => {
    try {
      employerStore.loading = true;
      const { data } = await axios.get("/jobseeker", {
        params: { id: id },
      });
      // console.log(data.data);
      jobseeekerData.value = data.data;
    } catch (error) {
      console.log(error);
    } finally {
      employerStore.loading = false;
    }
  };

  // Update Jobseeker Profile
  const updateJobseekerProfile = async (payload, id) => {
    try {
      employerStore.loading = true;
      const { data } = await axios.post("/jobseeker-profile", payload, {
        params: { id: id },
      });
      console.log(data.data);
      jobseeekerData.value = data.data;
    } catch (error) {
      console.log(error);
    } finally {
      employerStore.loading = false;
    }
  };

  // Get Resume List
  const getResumeList = async () => {
    try {
      employerStore.loading = true;
      const { data } = await axios.get("/jobseekers-resume");
      // console.log(data.data);
      resumeList.value = data.data;
    } catch (error) {
      console.log(error);
    } finally {
      employerStore.loading = false;
    }
  };

  // Get Resume
  const getResume = async (id) => {
    try {
      employerStore.loading = true;
      const { data } = await axios.get("/jobseeker-resume", {
        params: { id: id },
      });
      // console.log(data.data);
      resume.value = data.data;
    } catch (error) {
      console.log(error);
    } finally {
      employerStore.loading = false;
    }
  };

  // Update Resume
  const updateResume = async (payload, id) => {
    try {
      employerStore.loading = true;
      const { data } = await axios.post("/jobseeker-resume", payload, {
        params: { id: id },
      });
      console.log(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      employerStore.loading = false;
    }
  };

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

  // Alerts Jobs by User
  let handleAlertJobsByUser = computed(() => {
    return jobStore.jobList.filter((item) =>
      item.applicantsId.includes(JSON.parse(localStorage.getItem("user")).id)
    );
  });

  // Delete Job Alert
  const handleAlertJobsDeleteByUser = (jobId) => {
    // console.log(jobId);
    // console.log(jobStore.jobList);
    return (jobStore.jobList = jobStore.jobList.filter(
      (item) => item.id !== jobId
    ));
  };

  return {
    jobseekersList,
    resumeList,
    handleFilterAppliedJobsByUser,
    handleFilterSavedJobsByUser,
    handleAlertJobsByUser,
    handleAlertJobsDeleteByUser,
    getJobseekerList,
    getJobseeker,
    jobseeekerData,
    updateJobseekerProfile,
    getResumeList,
    getResume,
    resume,
    updateResume,
  };
});
