<template>
  <!-- Title -->
  <SubSectionHeading :subHeading="subHeadingList[0]" />

  <form>
    <div class="md:grid grid-cols-2 gap-5">
      <!-- company name -->
      <FormInput :formInput="formInputList[0]" />

      <!-- email -->
      <FormInput :formInput="formInputList[1]" />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- phone -->
      <FormInput :formInput="formInputList[2]" />

      <!-- website -->
      <FormInput :formInput="formInputList[3]" />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Est. Since -->
      <FormInput :formInput="formInputList[4]" />

      <!-- Team Size -->
      <FormInput :formInput="formInputList[5]" />
    </div>

    <!-- about company -->
    <FormTextarea :formTextarea="formTextareaList[0]" />

    <!-- SOCIAL NETWORK -->
    <h2 class="heading-paragraph mb-5 border-b pb-4 mt-10 uppercase">
      SOCIAL NETWORK
    </h2>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- FACEBOOK -->
      <FormInput :formInput="formInputList[6]" />

      <!-- Linkdin -->
      <FormInput :formInput="formInputList[7]" />
    </div>

    <!-- CONTACT INFORMATION -->
    <h2 class="heading-paragraph mb-5 border-b pb-4 mt-10 uppercase">
      CONTACT INFORMATION
    </h2>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- country -->
      <FormInput :formInput="formInputList[8]" />

      <!-- city -->
      <FormInput :formInput="formInputList[9]" />
    </div>

    <!-- Complete Address -->
    <FormInput :formInput="formInputList[10]" />

    <BtnPrimary :title="'Save'" :class="'btn btn-primary px-16'" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import FormInput from "../../components/form/FormInput.vue";
import FormTextarea from "../../components/form/FormTextarea.vue";
import BtnPrimary from "../../components/buttons/BtnPrimary.vue";

// State
const subHeadingList = ref([
  {
    title: "COMPANY PROFILE",
    btnTitle: "",
    btnIcon: "",
  },
  {
    title: "SOCIAL NETWORK",
    btnTitle: "",
    btnIcon: "",
  },
  {
    title: "CONTACT INFORMATION",
    btnTitle: "",
    btnIcon: "",
  },
]);

const formInputList = ref([
  {
    title: "Company Name (optional):",
    name: "companyName",
    value: "Bit Skyber",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Email:",
    name: "email",
    value: "bitskyber@gmail.com",
    type: "email",
    placeholder: "",
    required: true,
  },
  {
    title: "Phone:",
    name: "phone",
    value: "phone",
    type: "number",
    placeholder: "",
    required: true,
  },
  {
    title: "Website:",
    name: "website",
    value: "www.bitskyber.com",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Est. Since:",
    name: "estSince",
    value: 2006,
    type: "number",
    placeholder: "",
    required: true,
  },
  {
    title: "Team Size:",
    name: "teamSize",
    value: 10,
    type: "number",
    placeholder: "",
    required: true,
  },
  {
    title: "Facebook:",
    name: "facebook",
    value: "fb/bitskyber",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Twitter:",
    name: "twitter",
    value: "twitter/bitskyber",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Country:",
    name: "country",
    value: "Bangadesh",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "City:",
    name: "city",
    value: "Chittagong",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Complete Address:",
    name: "completeAddress",
    value: "Rangunia, Chittagong-4200",
    type: "text",
    placeholder: "",
    required: true,
  },
]);

const formTextareaList = ref([
  {
    type: "text",
    title: "About Company:",
    name: "aboutCompany",
    value:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque officiis a totam obcaecati commodi quam hic molestiae, optio eos, reiciendis quae praesentium earum doloribus beatae deserunt quisquam ratione labore accusamus!",
    placeholder: "",
    required: true,
    rows: 4,
  },
]);
</script>
