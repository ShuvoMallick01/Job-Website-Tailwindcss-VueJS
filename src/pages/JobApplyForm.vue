<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mt-16 xl:px-52 bg-white dark:bg-slate-900">
    <div class="py-14 text-center">
      <h1 class="mb-2">Job Apply Form</h1>
      <p class="large-text">Job Title: Vue JS Developer</p>
    </div>

    <form class="space-y-6 pb-20" @submit.prevent="formHandle()">
      <SubSectionHeading headingName="Applicant Information:" />

      <div class="md:grid grid-cols-2 gap-5">
        <FormInput
          labelName="Your Name:"
          id="name"
          type="text"
          required
          placeholder="Type your Full Name"
          v-model="userData.name"
        />

        <!-- Profession -->
        <FormInput
          labelName="Professional Title:"
          id="name"
          type="text"
          required
          placeholder="Type your Professional"
          v-model="userData.profession"
        />
      </div>

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Language -->
        <FormInput
          labelName="Language:"
          id="name"
          type="text"
          required
          placeholder="Type your Language"
          v-model="userData.language"
        />

        <!-- Age -->
        <FormInput
          labelName="Age:"
          id="age"
          type="number"
          required
          placeholder="Type your Age"
          v-model="userData.age"
        />
      </div>

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Current Salary ($) -->
        <FormInput
          labelName="Current Salary ($):"
          id="currentsalary"
          type="number"
          required
          v-model="userData.currentSalary"
        />

        <!-- Expected Salary -->
        <FormInput
          labelName="Expected Salary:"
          id="expectedsalary"
          type="number"
          required
          v-model="userData.expectedSalary"
        />
      </div>

      <!-- Description -->
      <Textarea
        labelName="Description:"
        id="description"
        type="text"
        required
        rows="4"
        placeholder="Type your description"
        v-model="userData.description"
      />

      <!-- Contact Information -->
      <SubSectionHeading headingName="Contact Information:" />

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Phone -->
        <FormInput
          labelName="Phone Number:"
          id="phoneNumber"
          type="number"
          required
          v-model="userData.phone"
        />

        <!-- Email -->
        <FormInput labelName="Email:" id="email" type="email" required />
      </div>

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Country -->
        <FormInput
          labelName="Country:"
          id="country"
          type="text"
          required
          v-model="userData.country"
        />

        <!-- Full Address -->
        <FormInput
          labelName="Full Adddress:"
          id="fullAddress"
          type="text"
          required
          v-model="userData.fullAddress"
        />
      </div>

      <!-- Resume Upload -->
      <div>
        <SubSectionHeading headingName="Resume Upload:" />
        <div class="border text-center py-20 mb-10">
          <form action="">
            <h4 class="mb-2">Drop files here to upload</h4>
            <p class="small-text mb-5">
              To upload file size is (Max 5Mb) and allowed file types are (.doc,
              .docx, .pdf)
            </p>

            <Button
              title="Upload Resume"
              wrapperClasses="relative overflow-hidden"
            >
              <template #prefix>
                <input
                  class="absolute cursor-pointer left-0 top-0 opacity-0"
                  id="resumeupload"
                  type="file"
                />
              </template>
            </Button>
          </form>
        </div>

        <!-- Title -->
        <SubSectionHeading headingName="Uploaded Resume:" />

        <div class="flex justify-between">
          <p class="medium-text">
            <i class="icon-file me-2"></i>Shuvo Mallick Resume
            <span>| Version 1.0</span>
          </p>
          <Button title="Download"></Button>
        </div>
      </div>

      <hr class="h-4" />

      <Button
        title="Submit Application"
        color="secondary"
        wrapperClasses="px-16   mx-auto  flex"
      ></Button>
    </form>
  </section>
</template>

<!-- SCRIPT -->
<script setup>
import Button from "../components/Button/Button.vue";
import FormInput from "../components/form/FormInput.vue";
import Textarea from "../components/form/Textarea.vue";
import SubSectionHeading from "../components/dashboard/SubSectionHeading.vue";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useEmployesStore } from "../stores/employerStore";
import { useJobseekersStore } from "../stores/jobseekerStore";
import { useAuthsStore } from "../stores/authStore";
import { useJobsStore } from "../stores/jobStore";

// State
const route = useRoute();
const router = useRouter();
const { jobseekersList } = useJobseekersStore();
const { userState } = useAuthsStore();
const { handleJobApplyByUser } = useJobsStore();
let jobId = ref();

// Methods
const formHandle = () => {
  console.log(userData.value);
  handleJobApplyByUser(jobId.value);
  router.replace("/");
};

const userData = computed(() => {
  return jobseekersList.find((item) => item.jobseekerId === userState.user.id);
});

onMounted(() => {
  let id = +route.params.id;
  console.log(id);
  jobId.value = id;
});
</script>
