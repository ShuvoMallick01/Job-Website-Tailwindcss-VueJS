import { defineStore, storeToRefs } from "pinia";
import { computed, reactive, ref, watch } from "vue";
import { useEmployesStore } from "./employerStore";
import axios from "axios";

export const useJobsStore = defineStore("jobs", () => {
  // === STATE ===
  const employerStore = useEmployesStore();
  let userId = ref(1);
  let jobList = ref([]);
  let filterJobList = reactive({
    jobType: [],
    jobRole: [],
    isRemote: false,
    salary: [],
    location: "",
  });
  const socialMediaList = ref([
    "icon-facebook-1",
    "icon-twitter",
    "icon-youtube",
    "icon-linkedin",
  ]);

  // === METHODS ===
  const getJobList = async () => {
    try {
      employerStore.loading = true;
      const { data } = await axios.get("/job-list");
      jobList.value = data.data;
    } catch (error) {
      console.log(error.response.data);
    } finally {
      employerStore.loading = false;
    }
  };

  // Favorite Jobs
  const handleJobFavorite = (jobId) => {
    jobList.value = jobList.value.map((job) =>
      job.id === jobId
        ? {
            ...job,
            isFavorite: !job.isFavorite,
          }
        : job
    );
    // console.log(jobList.value[jobId - 1].isFavorite);
  };

  // Apply Jobs
  const handleJobApplyByUser = (jobId) => {
    const findJob = jobList.value.find((item) => item.id === jobId);
    findJob.jobApplyStatus = !findJob.jobApplyStatus;
    console.log(jobId);
  };

  // Filter Jobs
  const filterJobsByJobseeker = computed(() => {
    let filterJobsByJobseeker = [...jobList.value];

    if (filterJobList.jobType.length > 0) {
      filterJobsByJobseeker = filterJobsByJobseeker.filter((job) =>
        filterJobList.jobType.includes(job.jobType.toLowerCase())
      );
    }

    if (filterJobList.jobRole.length > 0) {
      filterJobsByJobseeker = filterJobsByJobseeker.filter((job) =>
        filterJobList.jobRole.includes(job.jobRole.toLowerCase())
      );
    }

    if (filterJobList.isRemote) {
      filterJobsByJobseeker = filterJobsByJobseeker.filter(
        (job) => job.isRemote === filterJobList.isRemote
      );
    }

    if (filterJobList.salary.length > 0) {
      filterJobsByJobseeker = filterJobsByJobseeker.filter((job) => {
        const salaryRange = filterJobList.salary[0].split("-");
        // console.log(salaryRange);

        if (job.salary >= salaryRange[0] && job.salary <= salaryRange[1]) {
          // console.log("inner Range");
          return true;
        }
        return false;
      });
    }

    if (filterJobList.location) {
      filterJobsByJobseeker = filterJobsByJobseeker.filter(
        (job) => job.location.toLowerCase() === filterJobList.location
      );
    }
    // console.log(filterJobsByJobseeker);
    return filterJobsByJobseeker;
  });

  // RETURN
  return {
    filterJobList,
    jobList,
    handleJobFavorite,
    socialMediaList,
    handleJobApplyByUser,
    filterJobsByJobseeker,
    getJobList,
  };
});
