<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mt-32">
    <div class="mb-24 lg:px-32 lg:mx-32 2xl:px-52 2xl:mx-52">
      <div class="py-6 text-center">
        <h1 class="mb-2">SIGN UP FOR AN ACCOUNT</h1>
        <p class="small-text">
          Already have an account?

          <ButtonV1
            :href="'/login'"
            title="Sign In Here"
            variant="link"
            linkSize="link-small"
            wrapperClasses="underline "
          />
        </p>

        <div class="flex justify-center my-8 gap-4">
          <ButtonV1
            title="Sign in with Google"
            target="_blank"
            variant="outline"
            color="primary"
            prefixIcon="fa-brands fa-google me-2"
            @click="signInGoogle"
          />

          <ButtonV1
            title="Sign in with Apple"
            variant="filled"
            color="primary"
            prefixIcon="fa-brands fa-apple me-2"
            target="_blank"
            @click="signInApple"
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
      <form class="space-y-6">
        <FormSelectV1 labelName="Role" id="Role" :optionList="roleSelect" />

        <FormInputV1
          labelName="Name:"
          :required="true"
          id="name"
          type="text"
          placeholder="Type your Name"
        />

        <FormInputV1
          labelName="Email:"
          :required="true"
          id="email"
          type="email"
          placeholder="Type your Email"
        />

        <div class="relative">
          <FormInputV1
            labelName="Password:"
            type="password"
            id="password"
            placeholder="Password (min. 6 characters)"
            :required="true"
          />

          <ButtonV1
            :href="'/forget-password'"
            title="Forgot password?"
            variant="link"
            :linkSize="'link-small'"
            wrapperClasses="underline text-gray-500 font-light text-sm absolute top-0 end-0"
          />
        </div>

        <ButtonV1 title="Registration" type="submit" wrapperClasses="w-full" />
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Button from "../components/buttons/Button.vue";
import FormInput from "../components/form/FormInput.vue";
import FormSelect from "../components/form/FormSelect.vue";
import FormInputV1 from "../components/form/FormInput-V1.vue";
import ButtonV1 from "../components/buttons/Button-v1.vue";
import FormSelectV1 from "../components/form/FormSelect-v1.vue";

// STATE
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
