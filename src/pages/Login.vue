<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mt-32">
    <div class="mb-24 lg:px-32 lg:mx-32 2xl:px-52 2xl:mx-52">
      <div class="py-6 text-center">
        <h1 class="sectionHeading mb-2">Welcome Back</h1>
        <p class="paragraph-primary">
          Don't have an account yet?
          <Button
            :isButton="false"
            title="Get started for free"
            url="/registration"
            className="underline"
          />
        </p>

        <div class="flex justify-center my-8 gap-4">
          <Button
            :isButton="true"
            title="Sign in with Google"
            @click="signInGoogle"
            className="btn btn-outline-primary"
            beforeIcon="fa-brands fa-google me-2"
          />

          <Button
            :isButton="true"
            title="Sign in with Apple"
            @click="signInApple"
            className="btn btn-outline-primary"
            beforeIcon="fa-brands fa-apple me-2"
          />
        </div>

        <div class="flex justify-between items-center">
          <hr class="border flex-grow" />
          <p class="text-gray-500 font-light text-sm px-5 dark:text-gray-400">
            or sign in with
          </p>

          <hr class="border flex-grow" />
        </div>
      </div>

      <!-- Form -->
      <form>
        <div class="mb-6">
          <FormSelect labelName="Role" :optionList="roleSelect" />
        </div>

        <div class="mb-6">
          <FormInput :formInput="formInputList[0]" />
        </div>

        <div class="mb-6 relative">
          <FormInput :formInput="formInputList[1]" />

          <p
            class="underline text-gray-500 font-light text-sm dark:text-slate-400 absolute top-0 end-0"
          >
            Forgot password?
          </p>
        </div>

        <Button
          :isButton="true"
          title="Sign In"
          type="submit"
          className="w-full btn btn-primary"
        />
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Button from "../components/buttons/Button.vue";
import FormInput from "../components/form/FormInput.vue";
import FormSelect from "../components/form/FormSelect.vue";

// STATE
const formInputList = ref([
  {
    title: "Email:",
    name: "email",
    type: "email",
    placeholder: "Type your email",
    required: true,
  },
  {
    title: "Password:",
    name: "password",
    type: "password",
    placeholder: "Password (min. 6 characters)",
    required: true,
  },
]);

const roleSelect = ref([
  { title: "Select your Role", value: "" },
  { title: "Job Seeker", value: "jobseeeker" },
  { title: "Employer", value: "employer" },
]);

// METHODS
const signInGoogle = () => {
  window.open("https://accounts.google.com/", "_blank");
};
const signInApple = () => {
  window.open("https://appleid.apple.com/", "_blank");
};
</script>
