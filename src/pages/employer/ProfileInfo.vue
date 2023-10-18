<template>
  <!-- Title -->
  <SubSecHeading
    headingTitle="COMPANY PROFILE"
    divClassName="mb-8 pb-3 border-b"
  />

  <form>
    <div class="md:grid grid-cols-2 gap-5">
      <!-- company name -->
      <FormInput
        :formInput="formInputList[0]"
        v-model="companyProfile.companyName"
      />

      <!-- email -->
      <FormInput :formInput="formInputList[1]" v-model="companyProfile.email" />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- phone -->
      <FormInput :formInput="formInputList[2]" v-model="companyProfile.phone" />

      <!-- website -->
      <FormInput
        :formInput="formInputList[3]"
        v-model="companyProfile.website"
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Est. Since -->
      <FormInput
        :formInput="formInputList[4]"
        v-model="companyProfile.estSince"
      />

      <!-- Team Size -->
      <FormInput
        :formInput="formInputList[5]"
        v-model="companyProfile.teamSize"
      />
    </div>

    <!-- about company -->
    <Textarea
      v-model="companyProfile.aboutCompany"
      labelName="About Company"
      required="true"
      name="aboutcomapny"
    />

    <!-- SOCIAL NETWORK -->
    <SubSecHeading
      headingTitle="SOCIAL NETWORK"
      divClassName="mb-5 pb-3 border-b"
    />

    <div class="md:grid grid-cols-2 gap-5">
      <!-- FACEBOOK -->
      <FormInput
        :formInput="formInputList[6]"
        v-model="companyProfile.facebook"
      />

      <!-- Linkdin -->
      <FormInput
        :formInput="formInputList[7]"
        v-model="companyProfile.linkedin"
      />
    </div>

    <!-- CONTACT INFORMATION -->
    <SubSecHeading
      headingTitle="CONTACT INFORMATION"
      divClassName="mb-5 pb-3 border-b"
    />

    <div class="md:grid grid-cols-2 gap-5">
      <!-- country -->
      <FormInput
        :formInput="formInputList[8]"
        v-model="companyProfile.country"
      />

      <!-- city -->
      <FormInput :formInput="formInputList[9]" v-model="companyProfile.city" />
    </div>

    <!-- Complete Address -->
    <FormInput
      :formInput="formInputList[10]"
      v-model="companyProfile.completeAddress"
    />

    <BtnPrimary :title="'Save'" :class="'btn btn-primary px-16'" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useEmployesStore } from "../../stores/employerStore";
import FormInput from "../../components/form/FormInput.vue";
import BtnPrimary from "../../components/buttons/BtnPrimary.vue";
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
import Textarea from "../../components/form/Textarea.vue";

// State
const employerStore = useEmployesStore();
const companyProfile = employerStore.companyProfile[0];

const formInputList = ref([
  {
    title: "Company Name (optional):",
    name: "companyName",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Email:",
    name: "email",
    type: "email",
    placeholder: "",
    required: true,
  },
  {
    title: "Phone:",
    name: "phone",
    type: "number",
    placeholder: "",
    required: true,
  },
  {
    title: "Website:",
    name: "website",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Est. Since:",
    name: "estSince",
    type: "number",
    placeholder: "",
    required: true,
  },
  {
    title: "Team Size:",
    name: "teamSize",
    type: "number",
    placeholder: "",
    required: true,
  },
  {
    title: "Facebook:",
    name: "facebook",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Likedin:",
    name: "likedin",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Country:",
    name: "country",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "City:",
    name: "city",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Complete Address:",
    name: "completeAddress",
    type: "text",
    placeholder: "",
    required: true,
  },
]);
</script>
