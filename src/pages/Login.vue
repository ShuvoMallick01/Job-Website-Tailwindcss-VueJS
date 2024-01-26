<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mt-32">
    <div class="mb-24 lg:px-32 lg:mx-32 2xl:px-52 2xl:mx-52">
      <div class="py-6 text-center">
        <h1 class="mb-2">Welcome Back</h1>
        <p class="small-text">
          Don't have an account yet?

          <Link
            title="Get started for free?"
            :href="'/registration'"
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
          <p class="small-text">or sign in with</p>

          <hr class="border flex-grow" />
        </div>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit()" class="space-y-6">
        <FormSelect
          v-model="formData.role"
          labelName="Role"
          required
          id="Role"
          :optionList="roleSelect"
        />

        <FormInput
          v-model="formData.email"
          labelName="Email:"
          required
          id="email"
          type="email"
          placeholder="Type your Email"
        />

        <div class="relative">
          <FormInput
            v-model="formData.password"
            labelName="Password:"
            type="password"
            id="password"
            placeholder="Password (min. 6 characters)"
            required
          />

          <Link
            title="Get started for free?"
            :href="'/forget-password'"
            size="small"
            wrapperClasses="underline absolute top-0 end-0"
          />
        </div>

        <Button title="Sign In" type="submit" wrapperClasses="w-full" />
      </form>
    </div>
  </section>
</template>

<!-- SCRIPT -->
<script setup>
import { ref, onMounted } from "vue";
import { useJobseekersStore } from "../stores/jobseekerStore";
import { useEmployesStore } from "../stores/employerStore";
import { useAuthsStore } from "../stores/authStore";
import { useRouter } from "vue-router";
import FormSelect from "../components/form/FormSelect.vue";
import FormInput from "../components/form/FormInput.vue";
import Button from "../components/Button/Button.vue";
import Link from "../components/Link.vue";
import { useToast } from "vue-toastification";

const jobseekerStore = useJobseekersStore();
const employeeStore = useEmployesStore();
const authStore = useAuthsStore();
const router = useRouter();
const toast = useToast();

// STATE
const formData = ref({
  role: "",
  email: "",
  password: "",
});
const roleSelect = ref([
  { title: "Select your Role", value: "" },
  { title: "Job Seeker", value: "jobseeeker" },
  { title: "Employer", value: "employer" },
]);

// METHODS
const handleSubmit = async () => {
  try {
    await authStore.userLogin(formData.value);
    toast.success("Successfully Login!");
    router.replace("/");
  } catch (error) {
    toast.error("User Not Found");
    // console.log("User Not Found");
  }

  formData.value.role = "";
  formData.value.email = "";
  formData.value.password = "";
};

onMounted(() => {
  authStore.getEmployerLoginData();
  authStore.getJobseekerLoginData();
});

const signInGoogle = () => {
  window.open("https://accounts.google.com/", "_blank");
};
const signInApple = () => {
  window.open("https://appleid.apple.com/", "_blank");
};
</script>
