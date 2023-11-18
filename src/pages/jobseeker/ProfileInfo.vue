<template>
  <!-- Title -->
  <SubSectionHeading headingName="Basic Information" />

  <form class="space-y-5">
    <div class="md:grid grid-cols-2 gap-5">
      <FormInputV1
        labelName="Your Name:"
        id="your-name"
        type="text"
        :required="true"
        placeholder="Type your Full Name"
        v-model="user.name"
      />

      <FormInputV1
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
      <FormInputV1
        labelName="Language:"
        id="language"
        type="text"
        :required="true"
        placeholder="Type your Language"
        v-model="user.language"
      />

      <!-- Age -->
      <FormInputV1
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
      <FormInputV1
        labelName="Current Salary ($):"
        id="currentsalary"
        type="number"
        :required="true"
        placeholder="Type your current salary"
        v-model="user.currentSalary"
      />

      <!-- Expected Salary -->
      <FormInputV1
        labelName="Expected Salary ($):"
        id="expectedsalary"
        type="number"
        :required="true"
        placeholder="Type your current salary"
        v-model="user.expectedSalary"
      />
    </div>

    <!-- Description -->
    <FormInputV1
      :textarea="true"
      labelName="Description:"
      id="description"
      type="text"
      :required="true"
      rows="4"
      placeholder="Type your description"
      v-model="user.description"
    />

    <!-- Title -->
    <SubSectionHeading headingName="Contact Information" />

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Phone -->
      <FormInputV1
        labelName="Phone:"
        id="phone"
        type="number"
        :required="true"
        placeholder="Type your phone"
        v-model="user.phone"
      />
      <!-- Email -->
      <FormInputV1
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
      <FormInputV1
        labelName="Country:"
        id="country"
        type="country"
        :required="true"
        placeholder="Type your country"
        v-model="user.country"
      />

      <!-- Full Address -->
      <FormInputV1
        labelName="Full Adddress:"
        id="fulladdress"
        type="fulladdress"
        :required="true"
        placeholder="Type your Full Address"
        v-model="user.fullAddress"
      />
    </div>

    <ButtonV1 title="Submit" type="submit" wrapperClasses="px-10" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import FormInput from "../../components/form/FormInput.vue";
import Textarea from "../../components/form/Textarea.vue";
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
import Button from "../../components/buttons/Button.vue";
import ButtonV1 from "../../components/buttons/Button-v1.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import FormInputV1 from "../../components/form/FormInput-v1.vue";

// STATE
const store = useJobseekersStore();
const user = store.jobseekersList[0];

const formInputList = ref([
  {
    title: "Your Name:",
    name: "name",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Professional Title:",
    name: "professional",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Language:",
    name: "language",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    type: "number",
    title: "Age:",
    name: "age",
    placeholder: "",
    required: true,
  },
  {
    type: "number",
    title: "Current Salary ($):",
    name: "currentsalary",
    placeholder: "",
    required: true,
  },
  {
    type: "number",
    title: "Expected Salary:",
    name: "expectedsalary",
    placeholder: "",
    required: true,
  },
  {
    type: "number",
    title: "Phone:",
    name: "phone",
    placeholder: "",
    required: true,
  },
  {
    type: "email",
    title: "Email:",
    name: "email",
    placeholder: "",
    required: true,
  },
  {
    type: "text",
    title: "Country:",
    name: "country",
    placeholder: "",
    required: true,
  },
  {
    type: "text",
    title: "Full Adddress:",
    name: "fulladdress",
    placeholder: "",
    required: true,
  },
]);

const formTextareaList = ref([
  {
    type: "text",
    title: "Description:",
    name: "description",
    placeholder: "",
    required: true,
    rows: 4,
  },
]);
</script>
