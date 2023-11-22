<template>
  <!-- Title -->
  <SubSectionHeading headingName="COMPANY PROFILE" />

  <form class="space-y-6">
    <div class="md:grid grid-cols-2 gap-5">
      <!-- company name -->
      <FormInput
        labelName="Company Name (optional):"
        id="companyName"
        type="text"
        required
        v-model="companyProfile.companyName"
      />

      <!-- email -->
      <FormInput
        labelName="Email:"
        id="email"
        type="email"
        required
        v-model="companyProfile.email"
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- phone -->
      <FormInput
        labelName="Phone:"
        id="phone"
        type="number"
        required
        v-model="companyProfile.phone"
      />

      <!-- website -->
      <FormInput
        labelName="Website:"
        id="website"
        type="text"
        required
        v-model="companyProfile.website"
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Est. Since -->
      <FormInput
        labelName="Facebook:"
        id="facebook"
        type="text"
        required
        v-model="companyProfile.facebook"
      />

      <!-- Team Size -->
      <FormInput
        labelName="Linkedin:"
        id="linkedin"
        type="text"
        required
        v-model="companyProfile.linkedin"
      />
    </div>

    <!-- about company -->
    <Textarea
      labelName="About Country:"
      id="aboutCompany"
      type="text"
      required
      rows="4"
      placeholder="Type your description"
      v-model="companyProfile.aboutCompany"
    />

    <!-- SOCIAL NETWORK -->
    <SubSectionHeading headingName="SOCIAL NETWORK" />

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Est. Since -->
      <FormInput
        labelName="Est. Since:"
        id="estSince"
        type="number"
        required
        v-model="companyProfile.estSince"
      />

      <!-- Team Size -->
      <FormInput
        labelName="Team Size:"
        id="teamSize"
        type="number"
        required
        v-model="companyProfile.teamSize"
      />
    </div>

    <!-- CONTACT INFORMATION -->
    <SubSectionHeading headingName="CONTACT INFORMATION" />

    <div class="md:grid grid-cols-2 gap-5">
      <!-- country -->
      <FormInput
        labelName="Country:"
        id="country"
        type="text"
        required
        v-model="companyProfile.country"
      />

      <!-- city -->
      <FormInput
        labelName="City:"
        id="city"
        type="text"
        required
        v-model="companyProfile.city"
      />
    </div>

    <!-- Complete Address -->
    <FormInput
      labelName="Complete Address:"
      id="completeAddress"
      type="text"
      required
      v-model="companyProfile.completeAddress"
    />

    <Button :title="'Save'" wrapperClasses="px-16" type="submit" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useEmployesStore } from "../../stores/employerStore";
import SubSectionHeading from "../../components/local-components/dashboard/SubSectionHeading.vue";
import Button from "../../components/global-components/Button/Button.vue";
import FormInput from "../../components/global-components/form/FormInput.vue";
import Textarea from "../../components/global-components/form/Textarea.vue";

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
