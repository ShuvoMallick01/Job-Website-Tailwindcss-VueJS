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
      <form class="space-y-6">
        <FormSelect
          labelName="Role"
          id="Role"
          :optionList="roleSelect"
          required
        />

        <FormInput
          labelName="Name:"
          required
          id="name"
          type="text"
          placeholder="Type your Name"
        />

        <FormInput
          labelName="Email:"
          required
          id="email"
          type="email"
          placeholder="Type your Email"
        />

        <FormInput
          labelName="Password:"
          type="password"
          id="password"
          placeholder="Password (min. 6 characters)"
          required
        />

        <Button title="Registration" type="submit" wrapperClasses="w-full" />
      </form>
    </div>
  </section>
</template>

<!-- SCRIPT -->
<script setup>
import { ref } from "vue";
import FormSelect from "../components/form/FormSelect.vue";
import FormInput from "../components/form/FormInput.vue";
import Button from "../components/Button/Button.vue";
import Link from "../components/Link.vue";

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
