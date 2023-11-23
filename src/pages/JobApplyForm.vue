<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mt-20 xl:px-52 bg-white">
    <div class="py-14 text-center">
      <h1 class="text-4xl font-bold text-primary mb-2">Job Apply Form</h1>
      <p class="heading-paragraph">Job Title: Vue JS Developer</p>
    </div>

    <form>
      <div class="md:grid grid-cols-2 gap-5">
        <!-- <FormInput :formInput="formInputList[0]" /> -->

        <!-- Profession -->
        <!-- <FormInput :formInput="formInputList[1]" /> -->
      </div>

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Language -->
        <!-- <FormInput :formInput="formInputList[2]" /> -->

        <!-- Age -->
        <!-- <FormInput :formInput="formInputList[3]" /> -->
      </div>

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Current Salary ($) -->
        <!-- <FormInput :formInput="formInputList[4]" /> -->

        <!-- Expected Salary -->
        <!-- <FormInput :formInput="formInputList[5]" /> -->
      </div>

      <!-- Description -->
      <!-- <Textarea
        :labelName="'Description'"
        :required="true"
        name="description"
      /> -->

      <!-- Contact Information -->
      <!-- <SubSecHeading :title="'Contact Information'" /> -->

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Phone -->
        <!-- <FormInput :formInput="formInputList[6]" /> -->

        <!-- Email -->
        <!-- <FormInput :formInput="formInputList[7]" /> -->
      </div>

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Country -->
        <!-- <FormInput :formInput="formInputList[8]" /> -->

        <!-- Full Address -->
        <!-- <FormInput :formInput="formInputList[9]" /> -->
      </div>

      <!-- Resume Upload -->
      <div>
        <!-- <SubSecHeading :title="'Resume Upload'" /> -->

        <!-- file Upload -->
        <div class="border text-center py-5 mb-10">
          <h5 class="font heading-paragraph mb-2">Drop files here to upload</h5>
          <p class="text-gray-500 font-light text-xs mb-5">
            To upload file size is (Max 5Mb) and allowed file types are (.doc,
            .docx, .pdf)
          </p>

          <!-- <BtnFileUpload :title="'Upload Resume'" /> -->
        </div>

        <!-- Title -->
        <!-- <SubSecHeading :title="'Uploaded Resume'" /> -->

        <div class="flex justify-between">
          <p class="description-text">
            <i class="icon-file me-2"></i>Shuvo Mallick Resume | Version 1.1
          </p>
          <!-- <Button isButton="true" title="Download" className="btn-text" /> -->
        </div>
      </div>

      <!-- <Button
        isButton="true"
        type="submit"
        title="Submit Application"
        className="btn btn-primary my-10"
      /> -->
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
// import FormInput from "../components/form/FormInput.vue";
// import SubSecHeading from "../components/dashboard/SubSecHeading.vue";
// import BtnFileUpload from "../components/buttons/BtnFileUpload.vue";
// import Textarea from "../components/form/Textarea.vue";
// import Button from "../components/buttons/Button.vue";

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
</script>
