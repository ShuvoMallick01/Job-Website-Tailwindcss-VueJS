<template>
  <!-- Title -->
  <SubSectionHeading headingName="Basic Information" />

  <form class="space-y-5">
    <div class="md:grid grid-cols-2 gap-5">
      <FormInput
        labelName="Your Name:"
        id="your-name"
        type="text"
        required
        placeholder="Type your Full Name"
        v-model="getJobseekerData.name"
      />

      <FormInput
        labelName="Professional Title:"
        id="your-profession"
        type="text"
        required
        placeholder="Type your Profession"
        v-model="getJobseekerData.profession"
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Language -->
      <FormInput
        labelName="Language:"
        id="language"
        type="text"
        required
        placeholder="Type your Language"
        v-model="getJobseekerData.language"
      />

      <!-- Age -->
      <FormInput
        labelName="Age:"
        id="age"
        type="number"
        required
        placeholder="Type your Age"
        v-model="getJobseekerData.age"
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Current Salary ($) -->
      <FormInput
        labelName="Current Salary ($):"
        id="currentsalary"
        type="number"
        required
        placeholder="Type your current salary"
        v-model="getJobseekerData.currentSalary"
      />

      <!-- Expected Salary -->
      <FormInput
        labelName="Expected Salary ($):"
        id="expectedsalary"
        type="number"
        :required="true"
        placeholder="Type your current salary"
        v-model="getJobseekerData.expectedSalary"
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
      v-model="getJobseekerData.description"
    />

    <!-- Title -->
    <SubSectionHeading headingName="Contact Information" />

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Phone -->
      <FormInput
        labelName="Phone:"
        id="phone"
        type="number"
        :required="true"
        placeholder="Type your phone"
        v-model="getJobseekerData.phone"
      />
      <!-- Email -->
      <FormInput
        labelName="Email:"
        id="email"
        type="email"
        :required="true"
        placeholder="Type your email"
        v-model="getJobseekerData.phone"
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Country -->
      <FormInput
        labelName="Country:"
        id="country"
        type="country"
        :required="true"
        placeholder="Type your country"
        v-model="getJobseekerData.country"
      />

      <!-- Full Address -->
      <FormInput
        labelName="Full Adddress:"
        id="fulladdress"
        type="fulladdress"
        :required="true"
        placeholder="Type your Full Address"
        v-model="getJobseekerData.fullAddress"
      />
    </div>

    <Button title="Submit" type="submit" wrapperClasses="px-10" />
  </form>
</template>

<script setup>
import { computed, ref } from "vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import { useAuthsStore } from "../../stores/authStore";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import Button from "../../components/Button/Button.vue";
import FormInput from "../../components/form/FormInput.vue";
import Textarea from "../../components/form/Textarea.vue";

// STATE
const jobseekersStore = useJobseekersStore();
const authsStore = useAuthsStore();

const getJobseekerData = computed(() => {
  return jobseekersStore.jobseekersList.find(
    (item) => item.jobseekerId === authsStore.userState.user.id
  );
});
</script>
