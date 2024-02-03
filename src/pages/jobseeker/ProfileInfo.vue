<template>
  <!-- Title -->
  <SubSectionHeading headingName="Basic Information" />
  <form
    @submit.prevent="updateUserBasicInfo(userData, userData.id)"
    class="space-y-5 mb-12"
  >
    <div class="md:grid grid-cols-2 gap-5">
      <FormInput
        labelName="Your Name:"
        id="your-name"
        type="text"
        required
        placeholder="Type your Full Name"
        v-model="userData.name"
      />

      <FormInput
        labelName="Professional Title:"
        id="your-profession"
        type="text"
        required
        placeholder="Type your Profession"
        v-model="userData.profession"
      />
    </div>

    <!-- Email -->
    <FormInput
      labelName="Email:"
      id="email"
      type="email"
      :required="true"
      placeholder="Type your email"
      v-model="userData.email"
    />

    <Button title="Update" type="submit" wrapperClasses="px-12" />
  </form>

  <!-- Second Form -->
  <form
    v-if="jobseeekerData"
    @submit.prevent="
      updateJobseekerProfile(jobseeekerData, jobseeekerData.jobseekerId)
    "
    class="space-y-5"
  >
    <!-- Title -->
    <SubSectionHeading headingName="ADDITIONAL INFORMATION" />
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

      <!-- Country -->
      <FormInput
        labelName="Country:"
        id="country"
        type="country"
        :required="true"
        placeholder="Type your country"
        v-model="jobseeekerData.country"
      />
    </div>

    <!-- Full Address -->
    <FormInput
      labelName="Full Adddress:"
      id="fulladdress"
      type="fulladdress"
      :required="true"
      placeholder="Type your Full Address"
      v-model="jobseeekerData.fullAddress"
    />

    <Button title="Update" type="submit" wrapperClasses="px-12" />
  </form>

  <!-- Else -->
  <form v-else @submit.prevent="handleForm()" class="space-y-5">
    <!-- Title -->
    <SubSectionHeading headingName="ADDITIONAL INFORMATION" />
    <div class="md:grid grid-cols-2 gap-5">
      <!-- Language -->
      <FormInput
        labelName="Language:"
        id="language"
        type="text"
        required
        placeholder="Type your Language"
        v-model="formData.language"
      />

      <!-- Age -->
      <FormInput
        labelName="Age:"
        id="age"
        type="number"
        required
        placeholder="Type your Age"
        v-model="formData.age"
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
        v-model="formData.currentSalary"
      />

      <!-- Expected Salary -->
      <FormInput
        labelName="Expected Salary ($):"
        id="expectedsalary"
        type="number"
        :required="true"
        placeholder="Type your current salary"
        v-model="formData.expectedSalary"
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
      v-model="formData.description"
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
        v-model="formData.phone"
      />

      <!-- Country -->
      <FormInput
        labelName="Country:"
        id="country"
        type="country"
        :required="true"
        placeholder="Type your country"
        v-model="formData.country"
      />
    </div>

    <!-- Full Address -->
    <FormInput
      labelName="Full Adddress:"
      id="fulladdress"
      type="fulladdress"
      :required="true"
      placeholder="Type your Full Address"
      v-model="formData.fullAddress"
    />

    <Button title="Update" type="submit" wrapperClasses="px-12" />
  </form>
</template>

<!-- SCRIPT -->
<script setup>
import { computed, ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import { useAuthsStore } from "../../stores/authStore";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import Button from "../../components/Button/Button.vue";
import FormInput from "../../components/form/FormInput.vue";
import Textarea from "../../components/form/Textarea.vue";

// STATE
const { userData } = storeToRefs(useAuthsStore());
const { userState, getUser, updateUserBasicInfo } = useAuthsStore();

const { getJobseeker, updateJobseekerProfile } = useJobseekersStore();
const { jobseeekerData } = storeToRefs(useJobseekersStore());

const formData = ref({
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
});

// For New Registered User
const handleForm = () => {
  console.log("New Registred User:" + formData);
};

onMounted(() => {
  getUser(userState.user.id);
  getJobseeker(userState.user.id);
});
</script>
