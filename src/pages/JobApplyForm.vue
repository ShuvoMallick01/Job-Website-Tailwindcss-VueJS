<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mt-20 xl:px-52 bg-white">
    <div class="py-14 text-center">
      <h1 class="text-4xl font-bold text-primary mb-2">Job Apply Form</h1>
      <p class="heading-paragraph">Job Title: Vue JS Developer</p>
    </div>

    <form>
      <div class="md:grid grid-cols-2 gap-5">
        <FormInput :formInput="formInputList[0]" />

        <!-- Profession -->
        <FormInput :formInput="formInputList[1]" />
      </div>

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Language -->
        <FormInput :formInput="formInputList[2]" />

        <!-- Age -->
        <FormInput :formInput="formInputList[3]" />
      </div>

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Current Salary ($) -->
        <FormInput :formInput="formInputList[4]" />

        <!-- Expected Salary -->
        <FormInput :formInput="formInputList[5]" />
      </div>

      <!-- Description -->

      <FormTextarea :formTextarea="formTextareaList[0]" />

      <!-- Contact Information -->
      <SubSecHeading :title="'Contact Information'" />

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Phone -->
        <FormInput :formInput="formInputList[6]" />

        <!-- Email -->
        <FormInput :formInput="formInputList[7]" />
      </div>

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Country -->
        <FormInput :formInput="formInputList[8]" />

        <!-- Full Address -->
        <FormInput :formInput="formInputList[9]" />
      </div>

      <!-- Resume Upload -->
      <div>
        <SubSecHeading :title="'Resume Upload'" />

        <!-- file Upload -->
        <div class="border text-center py-5 mb-10">
          <h5 class="font heading-paragraph mb-2">Drop files here to upload</h5>
          <p class="text-gray-500 font-light text-xs mb-5">
            To upload file size is (Max 5Mb) and allowed file types are (.doc,
            .docx, .pdf)
          </p>

          <BtnFileUpload :title="'Upload Resume'" />
        </div>

        <!-- Title -->
        <SubSecHeading :title="'Uploaded Resume'" />

        <div class="flex justify-between">
          <p class="description-text">
            <i class="icon-file me-2"></i>Shuvo Mallick Resume
          </p>
          <BtnText title="Download" />
        </div>
      </div>

      <button type="submit" class="btn btn-primary my-10">Save Setting</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import FormInput from "../components/form/FormInput.vue";
import FormTextarea from "../components/form/FormTextarea.vue";
import SubSectionHeading from "../components/dashboard/SubSectionHeading.vue";
import SubSecHeading from "../components/dashboard/SubSecHeading.vue";
import BtnFileUpload from "../components/buttons/BtnFileUpload.vue";

const formInputList = ref([
  {
    title: "Your Name:",
    name: "name",
    value: "Shuvo Mallick",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Professional Title:",
    name: "professional",
    value: "Web Developer",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Language:",
    name: "language",
    value: "Bengali, English",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    type: "number",
    title: "Age:",
    name: "age",
    value: 27,
    placeholder: "",
    required: true,
  },
  {
    type: "number",
    title: "Current Salary ($):",
    name: "currentsalary",
    value: 2000,
    placeholder: "",
    required: true,
  },
  {
    type: "number",
    title: "Expected Salary:",
    name: "expectedsalary",
    value: 3000,
    placeholder: "",
    required: true,
  },
  {
    type: "number",
    title: "Phone:",
    name: "phone",
    value: +880123456789,
    placeholder: "",
    required: true,
  },
  {
    type: "email",
    title: "Email:",
    name: "email",
    value: "shuvomallick23@gmail.com",
    placeholder: "",
    required: true,
  },
  {
    type: "text",
    title: "Country:",
    name: "country",
    value: "Bangladesh",
    placeholder: "",
    required: true,
  },
  {
    type: "text",
    title: "Full Adddress:",
    name: "fulladdress",
    value: "Rangunia, Chittagong",
    placeholder: "",
    required: true,
  },
]);

const formTextareaList = ref([
  {
    type: "text",
    title: "Description:",
    name: "description",
    value:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque officiis a totam obcaecati commodi quam hic molestiae, optio eos, reiciendis quae praesentium earum doloribus beatae deserunt quisquam ratione labore accusamus!",
    placeholder: "",
    required: true,
    rows: 4,
  },
]);
</script>
