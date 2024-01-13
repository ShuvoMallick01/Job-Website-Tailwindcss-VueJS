import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { useJobseekersStore } from "./jobseekerStore";
import { useRouter } from "vue-router";

export const useAuthsStore = defineStore("auths", () => {
  // STATE
  const jobseekerStore = useJobseekersStore();
  const router = useRouter();
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
      email: "jobseeker@gmail.com",
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
      userState.user = newUser;

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

  const employerRegistration = async (data) => {
    const isUserExist = employerLoginData.value.some(
      (item) => item.email === payload.email
    );

    if (!isUserExist) {
      const newUser = {
        id: employerLoginData.value.length + 1,
        ...payload,
      };
      userState.user = newUser;
      // console.log(newUser);
      employerLoginData.value.push(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      window.alert("User is already exist");
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
  };
});
