<template>
  <!-- Title -->
  <SubSecHeading
    headingTitle="Basic Information"
    divClassName="mb-8 pb-3 border-b"
  />

  <form>
    <div class="md:grid grid-cols-2 gap-5">
      <FormInput :formInput="formInputList[0]" v-model="user.name" />
      <!-- Profession -->
      <FormInput :formInput="formInputList[1]" v-model="user.profession" />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Language -->
      <FormInput :formInput="formInputList[2]" v-model="user.language" />
      <!-- Age -->
      <FormInput :formInput="formInputList[3]" v-model="user.age" />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Current Salary ($) -->
      <FormInput :formInput="formInputList[4]" v-model="user.currentSalary" />
      <!-- Expected Salary -->
      <FormInput :formInput="formInputList[5]" v-model="user.expectedSalary" />
    </div>

    <!-- Description -->
    <FormTextarea
      :formTextarea="formTextareaList[0]"
      v-model="user.description"
    />

    <!-- Title -->
    <SubSecHeading
      headingTitle="Contact Information"
      divClassName="mb-8 pb-3 border-b"
    />

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Phone -->
      <FormInput :formInput="formInputList[6]" v-model="user.phone" />
      <!-- Email -->
      <FormInput :formInput="formInputList[7]" v-model="user.email" />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Country -->
      <FormInput :formInput="formInputList[8]" v-model="user.country" />
      <!-- Full Address -->
      <FormInput :formInput="formInputList[9]" v-model="user.fullAddress" />
    </div>

    <Button
      isButton="true"
      className="btn btn-primary px-10"
      type="submit"
      title="Submit"
    />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useJobseekersStore } from "../../stores/jobseekerStore";
import FormInput from "../../components/form/FormInput.vue";
import FormTextarea from "../../components/form/FormTextarea.vue";
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
import Button from "../../components/buttons/Button.vue";

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
