<template>
  <!-- Title -->
  <SubSectionHeading headingName="Basic Information" />

  <form
    @submit.prevent="
      jobseekersStore.updateJobseekerProfile(jobseeekerData, jobseeekerData.id)
    "
    class="space-y-5"
  >
    <div class="md:grid grid-cols-2 gap-5">
      <FormInput
        labelName="Your Name:"
        id="your-name"
        type="text"
        required
        placeholder="Type your Full Name"
        v-model="jobseeekerData.name"
      />

      <FormInput
        labelName="Professional Title:"
        id="your-profession"
        type="text"
        required
        placeholder="Type your Profession"
        v-model="jobseeekerData.profession"
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
        v-model="jobseeekerData.language"
      />

      <!-- Age -->
      <FormInput
        labelName="Age:"
        id="age"
        type="number"
        required
        placeholder="Type your Age"
        v-model="jobseeekerData.age"
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
        v-model="jobseeekerData.currentSalary"
      />

      <!-- Expected Salary -->
      <FormInput
        labelName="Expected Salary ($):"
        id="expectedsalary"
        type="number"
        :required="true"
        placeholder="Type your current salary"
        v-model="jobseeekerData.expectedSalary"
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
      v-model="jobseeekerData.description"
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
        v-model="jobseeekerData.phone"
      />
      <!-- Email -->
      <FormInput
        labelName="Email:"
        id="email"
        type="email"
        :required="true"
        placeholder="Type your email"
        v-model="jobseeekerData.email"
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
        v-model="jobseeekerData.country"
      />

      <!-- Full Address -->
      <FormInput
        labelName="Full Adddress:"
        id="fulladdress"
        type="fulladdress"
        :required="true"
        placeholder="Type your Full Address"
        v-model="jobseeekerData.fullAddress"
      />
    </div>

    <Button title="Update" type="submit" wrapperClasses="px-12" />
  </form>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import { useAuthsStore } from "../../stores/authStore";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import Button from "../../components/Button/Button.vue";
import FormInput from "../../components/form/FormInput.vue";
import Textarea from "../../components/form/Textarea.vue";
import { storeToRefs } from "pinia";

// STATE
const condi = ref(false);
const jobseekersStore = useJobseekersStore();
const { userState } = useAuthsStore();
const { jobseeekerData } = storeToRefs(useJobseekersStore());

onMounted(() => {
  jobseekersStore.getJobseekerList();
  jobseekersStore.getJobseeker(userState.user.id);
});
</script>
