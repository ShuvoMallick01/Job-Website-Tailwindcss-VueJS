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
  const usersData = ref([]);
  const userData = ref({});

  // METHODS
  // Get Users Data
  const getUsersData = async () => {
    try {
      employerStore.loading = true;
      const { data } = await axios.get("/users-data");
      usersData.value = data.data;
    } catch (error) {
      console.log(error.response);
    } finally {
      employerStore.loading = false;
    }
  };

  // Get User
  const getUser = async (id) => {
    // console.log(id);
    try {
      employerStore.loading = true;
      const { data } = await axios.get("/user-data", {
        params: { id: id },
      });
      // console.log(data.data);
      userData.value = data.data;
    } catch (error) {
      console.log(error.response);
    } finally {
      employerStore.loading = false;
    }
  };

  // Update User
  const updateUserBasicInfo = async (payload, id) => {
    // console.log(payload, id);
    try {
      employerStore.loading = true;
      const { data } = await axios.post("/user-update", payload, {
        params: { id: id },
      });
      console.log(data.data);
      userData.value = data.data;
    } catch (error) {
      console.log(error.response);
    } finally {
      employerStore.loading = false;
    }
  };

  // Login
  const userLogin = async (payload) => {
    try {
      console.log(payload);
      employerStore.loading = true;
      const { data } = await axios.get("/user-login", { payload });
      localStorage.setItem("user", JSON.stringify(data.data));
      userState.user = data.data;
      toast.success("Successfully Login!");
      router.replace("/");
    } catch (error) {
      toast.error("Invlid Login Data");
      console.log(error);
    } finally {
      employerStore.loading = false;
    }
  };

  // Registration
  const userRegistration = async (payload) => {
    try {
      employerStore.loading = true;
      const { data } = await axios.post("/user-registration", payload);
      console.log(data.data);

      toast.success("Registration Successfully Complete!");
      router.replace("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      employerStore.loading = false;
    }
  };

  // Get Employer Login Data
  // const getEmployerLoginData = async () => {
  //   try {
  //     employerStore.loading = true;
  //     const { data } = await axios.get("/employer-login-data");
  //     // console.log(data.data);
  //     employerLoginData.value = data.data;
  //   } catch (error) {
  //     console.log(error.response);
  //   } finally {
  //     employerStore.loading = false;
  //   }
  // };

  // Get JobSeeker Login Data
  // const getJobseekerLoginData = async () => {
  //   try {
  //     employerStore.loading = true;
  //     const { data } = await axios.get("/jobseeker-login-data");
  //     // console.log(data.data);
  //     jobseekerLoginData.value = data.data;
  //   } catch (error) {
  //     console.log(error.response);
  //   } finally {
  //     employerStore.loading = false;
  //   }
  // };

  // Job Seeker Registration
  // const jobseekerRegistration = async (payload) => {
  //   const isUserExist = jobseekerLoginData.value.some(
  //     (item) => item.email === payload.email
  //   );

  //   if (!isUserExist) {
  //     try {
  //       employerStore.loading = true;
  //       const { data } = await axios.post("/jobseeker-logindata", payload);
  //       console.log(data.data);
  //     } catch (error) {
  //       console.log(error.response);
  //     } finally {
  //       employerStore.loading = false;
  //     }
  //   }
  // };

  // Employer Registration
  // const employerRegistration = async (payload) => {
  //   const isUserExist = employerLoginData.value.some(
  //     (item) => item.email === payload.email
  //   );

  //   if (!isUserExist) {
  //     try {
  //       employerStore.loading = true;
  //       const { data } = await axios.post("/employer-logindata", payload);
  //       console.log(data.data);
  //     } catch (error) {
  //       console.log(error.response);
  //     } finally {
  //       employerStore.loading = false;
  //     }
  //   }
  // };

  // Check Authenitcation
  const isAuthenticated = computed(() => {
    return userState.user ? true : false;
  });

  // User Password Update
  const handlePasswordChange = async (payload) => {
    try {
      employerStore.loading = true;
      const { data } = await axios.post("/user-password", payload, {
        params: { id: userState.user.id },
      });
      console.log(data.data);
      toast.success("Successfully Password Changed!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      employerStore.loading = false;
    }
  };

  // Delete Profile
  const handleDeleteProfilebyUser = async () => {
    try {
      employerStore.loading = true;
      const { data } = await axios.post("/user-delete", {
        params: { id: userState.user.id },
      });
      toast.success("Deleted Profile Successfully");
      handleLogout();
    } catch (error) {
      toast.error(error.message);
    } finally {
      employerStore.loading = false;
    }
  };

  // Logout
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
    userLogin,
    isAuthenticated,
    handleLogout,
    handlePasswordChange,
    handleDeleteProfilebyUser,
    getUsersData,
    userRegistration,
    userData,
    getUser,
    updateUserBasicInfo,
  };
});
