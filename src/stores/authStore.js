import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { useJobseekersStore } from "./jobseekerStore";
import { useRouter } from "vue-router";
import axios from "axios";
import { useEmployesStore } from "./employerStore";
import { useToast } from "vue-toastification";

export const useAuthsStore = defineStore("auths", () => {
  // STATE
  const jobseekerStore = useJobseekersStore();
  const employerStore = useEmployesStore();
  const router = useRouter();
  const toast = useToast();
  let userState = reactive({
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  });
  const jobseekerLoginData = ref([]);
  const employerLoginData = ref([]);

  // METHODS
  // Get Employer Login Data
  const getEmployerLoginData = async () => {
    try {
      employerStore.loading = true;
      const { data } = await axios.get("/employer-login-data");
      // console.log(data.data);
      employerLoginData.value = data.data;
    } catch (error) {
      console.log(error.response);
    } finally {
      employerStore.loading = false;
    }
  };

  // Get JobSeeker Login Data
  const getJobseekerLoginData = async () => {
    try {
      employerStore.loading = true;
      const { data } = await axios.get("/jobseeker-login-data");
      // console.log(data.data);
      jobseekerLoginData.value = data.data;
    } catch (error) {
      console.log(error.response);
    } finally {
      employerStore.loading = false;
    }
  };

  // Job Seeker Registration
  const jobseekerRegistration = async (payload) => {
    const isUserExist = jobseekerLoginData.value.some(
      (item) => item.email === payload.email
    );

    if (!isUserExist) {
      try {
        employerStore.loading = true;
        const { data } = await axios.post("/jobseeker-logindata", payload);
        console.log(data.data);
      } catch (error) {
        console.log(error.response);
      } finally {
        employerStore.loading = false;
      }
    }
  };

  // Employer Registration
  const employerRegistration = async (payload) => {
    const isUserExist = employerLoginData.value.some(
      (item) => item.email === payload.email
    );

    if (!isUserExist) {
      try {
        employerStore.loading = true;
        const { data } = await axios.post("/employer-logindata", payload);
        console.log(data.data);
      } catch (error) {
        console.log(error.response);
      } finally {
        employerStore.loading = false;
      }
    }
  };

  // Login
  const userLogin = async (payload) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (payload.role === "jobseeeker") {
          const findUserData = jobseekerLoginData.value.filter(
            (item) => item.email === payload.email
          );
          console.log(findUserData[0]);

          if (findUserData.length > 0) {
            localStorage.setItem("user", JSON.stringify(findUserData[0]));
            userState.user = findUserData[0];
            return resolve();
          } else {
            return reject("User Not found..");
          }
        } else if (payload.role === "employer") {
          const findUserData = employerLoginData.value.filter(
            (item) => item.email === payload.email
          );

          if (findUserData.length > 0) {
            localStorage.setItem("user", JSON.stringify(findUserData[0]));
            userState.user = findUserData[0];
            return resolve();
          } else {
            return reject("User Not found..");
          }
        } else {
          return reject("Someting Wents Wrong..");
        }
      }, 1000);
    });

    return promise;
  };

  // Check Authenitcation
  const isAuthenticated = computed(() => {
    return userState.user ? true : false;
  });

  // User Password Update
  const handlePasswordChange = async (payload) => {
    // console.log(payload);
    if (userState.user.role === "jobseeker") {
      try {
        employerStore.loading = true;
        const { data } = await axios.post("/jobseeker-password", payload, {
          params: { id: userState.user.id },
        });
        console.log(data.data);
        jobseekerLoginData.value = data.data;
        toast.success("Successfully Password Changed!");
      } catch (error) {
        console.log(error);
      } finally {
        employerStore.loading = false;
      }
    } else if (userState.user.role === "employer") {
      try {
        employerStore.loading = true;
        const { data } = await axios.post("/employer-password", payload, {
          params: { id: userState.user.id },
        });
        console.log(data.data);
        employerLoginData.value = data.data;
        toast.success("Successfully Password Changed!");
      } catch (error) {
        console.log(error);
      } finally {
        employerStore.loading = false;
      }
    }
  };

  // Delete Profile
  const handleDeleteProfilebyUser = async () => {
    // console.log("Handle Delete Profile");
    toast.alert("Are you sure to delete your profile?");
    if (userState.user.role === "jobseeker") {
      try {
        employerStore.loading = true;
        const { data } = await axios.post("/jobseeker-delete", {
          params: { id: userState.user.id },
        });
        console.log(userState.user.id);
        jobseekerLoginData.value = data.data;
        console.log("JobSeeker Deleted her Profile");
        handleLogout();
      } catch (error) {
        console.log(error);
      } finally {
        employerStore.loading = false;
      }
    } else if (userState.user.role === "employer") {
      try {
        employerStore.loading = true;
        const { data } = await axios.post("/employer-delete", {
          params: { id: userState.user.id },
        });
        console.log(userState.user.id);
        employerLoginData.value = data.data;
        console.log("Employeer Deleted her Profile");
        handleLogout();
      } catch (error) {
        console.log(error);
      } finally {
        employerStore.loading = false;
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    userState.user = "";
    router.push("/login");
  };

  // RETURN
  return {
    userState,
    jobseekerLoginData,
    employerLoginData,
    jobseekerRegistration,
    employerRegistration,
    userLogin,
    isAuthenticated,
    handleLogout,
    handlePasswordChange,
    handleDeleteProfilebyUser,
    getEmployerLoginData,
    getJobseekerLoginData,
  };
});
