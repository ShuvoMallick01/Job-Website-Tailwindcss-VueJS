<template>
  <!-- Title -->
  <SubSectionHeading :subHeading="subHeadingList[0]" />

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

    <!-- Title -->
    <SubSectionHeading :subHeading="subHeadingList[1]" />

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

    <button type="submit" class="btn btn-primary">Save Setting</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import FormInput from "../../components/form/FormInput.vue";
import FormTextarea from "../../components/form/FormTextarea.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";

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

const subHeadingList = ref([
  {
    title: "Basic Information",
    btnTitle: "",
    btnIcon: "",
  },
  {
    title: "Contact Information",
    btnTitle: "",
    btnIcon: "",
  },
]);
</script>
