<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mt-32">
    <div class="mb-24 lg:px-32 lg:mx-32 2xl:px-52 2xl:mx-52">
      <div class="py-6 text-center">
        <h1 class="mb-2">SIGN UP FOR AN ACCOUNT</h1>
        <p class="small-text">
          Already have an account?

          <Link
            title="Sign In Here?"
            :href="'/login'"
            wrapperClasses="underline"
          />
        </p>

        <div class="flex justify-center my-8 gap-4">
          <Button
            title="Sign in with Google"
            target="_blank"
            variant="outline"
            @click="signInGoogle"
          >
            <template #prefix>
              <i class="fa-brands fa-google me-2"></i>
            </template>
          </Button>

          <Button
            title="Sign in with Apple"
            variant="filled"
            color="primary"
            target="_blank"
            @click="signInApple"
          >
            <template #prefix>
              <i class="fa-brands fa-apple me-2"></i>
            </template>
          </Button>
        </div>

        <div class="flex justify-between items-center">
          <hr class="border flex-grow" />
          <p class="small-text">or sign up with</p>

          <hr class="border flex-grow" />
        </div>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit()" class="space-y-6">
        <FormSelect
          v-model="formData.role"
          labelName="Role"
          id="Role"
          :optionList="roleSelect"
          required
        />

        <FormInput
          v-model="formData.name"
          labelName="Name:"
          required
          id="name"
          type="text"
          placeholder="Type your Name"
        />

        <FormInput
          v-model="formData.email"
          labelName="Email:"
          required
          id="email"
          type="email"
          placeholder="Type your Email"
        />

        <FormInput
          v-model="formData.password"
          labelName="Password:"
          type="password"
          id="password"
          placeholder="Password (min. 6 characters)"
          required
        />

        <FormInput
          v-model="formData.confirmPassword"
          labelName="Confirm Password:"
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password (min. 6 characters)"
          required
        />

        <Button title="Registration" type="submit" wrapperClasses="w-full" />
      </form>
    </div>
  </section>
</template>

<!-- SCRIPT -->
<script setup>
import { ref, computed, reactive } from "vue";
import { useAuthsStore } from "../stores/authStore";
import { useRoute, useRouter } from "vue-router";
import FormSelect from "../components/form/FormSelect.vue";
import FormInput from "../components/form/FormInput.vue";
import Button from "../components/Button/Button.vue";
import Link from "../components/Link.vue";

const store = useAuthsStore();
const { userRegistration } = store;
const router = useRouter();

// STATE
const formData = reactive({
  role: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});
// const role = ref("");
// const name = ref("");
// const email = ref("");
// const password = ref("");
// const confirmPassword = ref("");
const roleSelect = ref([
  { title: "Select your Role", value: "" },
  { title: "Job Seeker", value: "jobseeeker" },
  { title: "Employer", value: "employer" },
]);

// METHODS
const handleSubmit = async () => {
  if (formData.password !== formData.confirmPassword) {
    alert("Not Match the Password");
    return;
  }
  // console.log(formData);
  try {
    if (formData.role === "jobseeeker") {
      await store.jobseekerRegistration(formData);
    } else if (role.value === "employer") {
      await store.employerRegistration(formData);
    }
    // window.alert("Registration Successfully Completed");
    router.replace("/login");
  } catch (e) {
    console.log("Someting is Wrong..");
  }
};

// const handleSubmit = async () => {
//   if (password.value !== confirmPassword.value) {
//     alert("Not Match the Password");
//     return;
//   }

//   try {
//     if (role.value === "jobseeeker") {
//       await store.jobseekerRegistration({
//         name: name.value,
//         email: email.value,
//         password: password.value,
//       });
//     } else if (role.value === "employer") {
//       await store.employerRegistration({
//         name: name.value,
//         email: email.value,
//         password: password.value,
//       });
//     }
//     // window.alert("Registration Successfully Completed");
//     router.replace("/login");
//   } catch (e) {
//     console.log("Someting is Wrong..");
//   }
// };

const signInGoogle = () => {
  window.open("https://accounts.google.com/", "_blank");
};
const signInApple = () => {
  window.open("https://appleid.apple.com/", "_blank");
};
</script>
