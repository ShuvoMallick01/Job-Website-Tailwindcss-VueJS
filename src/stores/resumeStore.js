import { defineStore } from "pinia";
import { useEmployesStore } from "./employerStore";
import { ref } from "vue";
import axios from "axios";

export const useResumeStore = defineStore("resume", () => {
  // STATE
  const employerStore = useEmployesStore;
  const resumeList = ref([]);
  const resume = ref([]);

  // METHODS
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

  return {
    resumeList,
    resume,
    getResumeList,
    getResume,
    updateResume,
  };
});
