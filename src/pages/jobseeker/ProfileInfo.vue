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
        v-model="user.name"
      />

      <FormInput
        labelName="Professional Title:"
        id="your-profession"
        type="text"
        :required="true"
        placeholder="Type your Profession"
        v-model="user.profession"
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Language -->
      <FormInput
        labelName="Language:"
        id="language"
        type="text"
        :required="true"
        placeholder="Type your Language"
        v-model="user.language"
      />

      <!-- Age -->
      <FormInput
        labelName="Age:"
        id="age"
        type="number"
        :required="true"
        placeholder="Type your Age"
        v-model="user.age"
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Current Salary ($) -->
      <FormInput
        labelName="Current Salary ($):"
        id="currentsalary"
        type="number"
        :required="true"
        placeholder="Type your current salary"
        v-model="user.currentSalary"
      />

      <!-- Expected Salary -->
      <FormInput
        labelName="Expected Salary ($):"
        id="expectedsalary"
        type="number"
        :required="true"
        placeholder="Type your current salary"
        v-model="user.expectedSalary"
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
      v-model="user.description"
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
        v-model="user.phone"
      />
      <!-- Email -->
      <FormInput
        labelName="Email:"
        id="email"
        type="email"
        :required="true"
        placeholder="Type your email"
        v-model="user.phone"
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
        v-model="user.country"
      />

      <!-- Full Address -->
      <FormInput
        labelName="Full Adddress:"
        id="fulladdress"
        type="fulladdress"
        :required="true"
        placeholder="Type your Full Address"
        v-model="user.fullAddress"
      />
    </div>

    <Button title="Submit" type="submit" wrapperClasses="px-10" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import Button from "../../components/global-components/Button/Button.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import FormInput from "../../components/global-components/form/FormInput.vue";
import Textarea from "../../components/global-components/form/Textarea.vue";

// STATE
const store = useJobseekersStore();
const user = store.jobseekersList[0];
</script>
