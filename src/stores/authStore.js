import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { useJobseekersStore } from "./jobseekerStore";
import { useRouter } from "vue-router";
import axios from "axios";
import { useEmployesStore } from "./employerStore";

export const useAuthsStore = defineStore("auths", () => {
  // STATE
  const jobseekerStore = useJobseekersStore();
  const employerStore = useEmployesStore();
  const router = useRouter();
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

  const isAuthenticated = computed(() => {
    return userState.user ? true : false;
  });

  const handlePasswordChange = (data) => {
    console.log(data);
    if (userState.user.role === "jobseeker") {
      const userData = jobseekerLoginData.value.find(
        (item) => item.id === userState.user.id
      );
      console.log(userData);

      if (userData.password === data.oldPassword) {
        jobseekerLoginData.value = jobseekerLoginData.value.map((item) =>
          item.id === userState.user.id
            ? { ...item, password: data.newPassword }
            : item
        );
        console.log("Password Update Successfully");

        // console.log(jobseekerLoginData.value);
      } else {
        window.alert("Not Match Password");
      }
    }
  };

  const handleDeleteProfilebyUser = () => {
    // console.log("Handle Delete Profile");
    if (userState.user.role === "jobseeker") {
      console.log("JobSeeker Deleted her Profile");
      jobseekerLoginData.value = jobseekerLoginData.value.filter(
        (item) => item.id !== userState.user.id
      );
      handleLogout();
    } else if (userState.user.role === "employer") {
      console.log("Employer Deleted her Profile");
      employerLoginData.value = employerLoginData.value.filter(
        (item) => item.id !== userState.user.id
      );
      handleLogout();
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
