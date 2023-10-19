<template>
  <!-- Title -->
  <SubSecHeading
    headingTitle="POST A NEW JOB"
    divClassName="mb-8 pb-3 border-b"
  />

  <form>
    <FormInput :formInput="formInputList[0]" />

    <!-- Job Description -->
    <Textarea
      labelName="Job Description"
      required
      v-model="user.description"
      name="jobdescription"
    />

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Email -->
      <FormInput :formInput="formInputList[1]" />

      <!-- Username -->
      <FormInput :formInput="formInputList[2]" />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Job Type -->

      <div class="mb-6">
        <label
          for="jobtype"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Job Type:</label
        >
        <FormSelect :optionList="formSelectList[0]" />
      </div>

      <!-- Job Roles -->
      <div class="mb-6">
        <label
          for="jobroles"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Job Roles:</label
        >
        <FormSelect :optionList="formSelectList[1]" />
      </div>
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Offered Salary -->
      <FormInput :formInput="formInputList[3]" />

      <!-- Remotely Only  -->
      <div class="mb-6">
        <label
          for="joblocationtype"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Remotely Only:</label
        >
        <FormSelect :optionList="formSelectList[2]" />
      </div>
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Company Name -->
      <FormInput :formInput="formInputList[4]" />

      <!-- Location  -->
      <div class="mb-6">
        <label for="location" class="formlabel">Location:</label>
        <FormSelect :optionList="formSelectList[3]" />
      </div>
    </div>

    <Button
      :isButton="true"
      :title="'Post New Job'"
      :className="'btn btn-primary px-10'"
    />
  </form>
</template>

<script setup>
import { ref } from "vue";
import FormInput from "../../components/form/FormInput.vue";
import FormSelect from "../../components/form/FormSelect.vue";
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
import Textarea from "../../components/form/Textarea.vue";
import Button from "../../components/buttons/Button.vue";

// State
const formInputList = ref([
  {
    title: "Job Title:",
    name: "jobTitle",
    value: "",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Email Address:",
    name: "email",
    value: "",
    type: "email",
    placeholder: "",
    required: true,
  },
  {
    title: "Website:",
    name: "website",
    value: "",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Offered Salary:",
    name: "offeredSalary",
    value: "",
    type: "number",
    placeholder: "",
    required: true,
  },
  {
    title: "Company Name:",
    name: "companyName",
    value: "",
    type: "text",
    placeholder: "",
    required: true,
  },
]);

const formSelectList = ref([
  [
    { title: "Select Job Type", value: "" },
    { title: "Full-time", value: "fulltime" },
    { title: "Part-time", value: "partime" },
    { title: "Internship", value: "internship" },
    { title: "Contract/Freelance", value: "contract-freelance" },
    { title: "Co-founder", value: "cofounder" },
  ],
  [
    { title: "Select Job Roles", value: "" },
    { title: "Programming", value: "programming" },
    { title: "Design", value: "design" },
    { title: "Management / Finance", value: "management-finance" },
    { title: "Customer Support", value: "customerSupport" },
    { title: "Sales / Marketing", value: "sales-marketing" },
  ],
  [
    { title: "Select", value: "" },
    { title: "Yes", value: "yes" },
    { title: "No", value: "no" },
  ],
  [
    { title: "Choose a country", value: "" },
    { title: "Bangladesh", value: "bangladesh" },
    { title: "India", value: "india" },
    { title: "United State", value: "unitedstate" },
    { title: "Canada", value: "canada" },
    { title: "Europe", value: "europe" },
  ],
]);

const formTextareaList = ref([
  {
    type: "text",
    title: "Job Description:",
    name: "jobDescription",
    value: "",
    placeholder: "",
    required: true,
    rows: 4,
  },
]);
</script>
