import { defineStore } from "pinia";
import { reactive } from "vue";
import { useJobseekersStore } from "./jobseekerStore";

export const useAuthsStore = defineStore("auths", () => {
  // STATE
  const jobseekerStore = useJobseekersStore();
  let userState = reactive({
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  });

  // METHODS
  // Registration
  const jobseekerRegistration = async (payload) => {
    // console.log(payload);

    // const isUserExist = jobseekerStore.jobseekersList.find(
    //   (item) => item.email === payload.email
    // );

    const isUserExist = jobseekerStore.jobseekersList.some(
      (item) => item.email === payload.email
    );

    console.log(isUserExist);

    if (!isUserExist) {
      const newUser = {
        id: jobseekerStore.jobseekersList.length + 1,
        role: "jobseeker",
        name: payload.name,
        image: "",
        email: payload.email,
        password: payload.password,
        profession: "",
        language: [],
        age: null,
        currentSalary: null,
        expectedSalary: null,
        description: "",
        phone: "",
        country: "",
        fullAddress: "",
        favoriteJobId: [],
        appliedJobId: [],
      };

      jobseekerStore.jobseekersList.push(newUser);

      localStorage.setItem("user", JSON.stringify(newUser));
      //   userState.user = data;
    } else {
      window.alert("User is already exist");
      return;
    }

    // const response = await fetch("/registration", {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const result = await response.json();
    // console.log(response);

    // const data = { ...payload };
    // if (data) {
    //   localStorage.setItem("user", JSON.stringify(data));
    //   userState.user = data;
    //   console.log(userState.user);
    // } else {
    //   return data;
    // }
    // return response.json();
  };

  const employerRegistration = async (data) => {
    console.log(data);
    // const response = await fetch("/registration", {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const result = await response.json();
    // console.log(response);

    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
      userState.user = data;
      console.log(userState.user);
    } else {
      return data;
    }

    // return response.json();
  };

  // Login
  const userLogin = async (data) => {
    console.log(data);
    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
      userState.user = data;
    } else {
      return data;
    }
  };

  // RETURN
  return { jobseekerRegistration, employerRegistration, userLogin };
});
