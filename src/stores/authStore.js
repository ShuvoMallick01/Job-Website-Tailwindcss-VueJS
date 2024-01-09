import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { useJobseekersStore } from "./jobseekerStore";

export const useAuthsStore = defineStore("auths", () => {
  // STATE
  const jobseekerStore = useJobseekersStore();
  let userState = reactive({
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  });
  const jobseekerLoginData = ref([
    {
      id: 1,
      role: "jobseeker",
      name: "Shuvo Mallick",
      email: "shuvo@gmail.com",
      password: "jobseeker",
    },
    {
      id: 2,
      role: "jobseeker",
      name: "Bit Skyber",
      email: "shuvo01@gmail.com",
      password: "bitskyber",
    },
  ]);

  const employerLoginData = ref([
    {
      id: 1,
      role: "employer",
      name: "Employer 01",
      email: "employer01@gmail.com",
      password: "employer01",
    },
    {
      id: 2,
      role: "employer",
      name: "Employer 02",
      email: "employer02@gmail.com",
      password: "employer02",
    },
  ]);

  // METHODS
  // Registration
  const jobseekerRegistration = async (payload) => {
    const isUserExist = jobseekerLoginData.value.some(
      (item) => item.email === payload.email
    );

    if (!isUserExist) {
      const newUser = {
        id: jobseekerLoginData.value.length + 1,
        ...payload,
      };
      console.log(newUser);

      jobseekerLoginData.value.push(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      window.alert("User is already exist");
    }

    // const response = await fetch("/registration", {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const result = await response.json();
    // const data = { ...payload };
    // return response.json();
  };

  // Employer Registration
  const employerRegistration = async (data) => {
    const isUserExist = employerLoginData.value.some(
      (item) => item.email === payload.email
    );

    if (!isUserExist) {
      const newUser = {
        id: employerLoginData.value.length + 1,
        ...payload,
      };

      // console.log(newUser);
      employerLoginData.value.push(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      window.alert("User is already exist");
    }
  };

  // Login
  const userLogin = async (data) => {
    console.log(data);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.role === "jobseeeker") {
          const isUserExist = jobseekerLoginData.value.some(
            (item) => item.email === data.email
          );
          console.log(isUserExist);
          if (isUserExist) {
            localStorage.setItem("user", JSON.stringify(data));
            userState.user = data;
            return resolve();
          } else {
            // console.log("user Not found in Promise");
            return reject("User Not found..");
          }
        } else if (data.role === "employer") {
          const isUserExist = employerLoginData.value.some(
            (item) => item.email === data.email
          );

          // console.log(isUserExist);
          if (isUserExist) {
            localStorage.setItem("user", JSON.stringify(data));
            userState.user = data;
            return resolve();
          } else {
            // console.log("user Not found in Promise");
            return reject("User Not found..");
          }
        } else {
          return reject("Someting Wents Wrong..");
        }
        // const isUserExist=
      }, 1000);
    });

    return promise;
  };

  const isAuthenticated = computed(() => {
    return userState.user ? true : false;
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    userState.user = null;
    return;
  };

  // RETURN
  return {
    jobseekerRegistration,
    employerRegistration,
    userLogin,
    isAuthenticated,
    handleLogout,
  };
});
