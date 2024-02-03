<template>
  <!-- Title -->
  <SubSectionHeading headingName="COMPANY PROFILE" />

  <div v-if="loading">
    <p>Loading...</p>
  </div>

  <form
    v-else
    @submit.prevent="
      updteCompanyProfile(companyProfile, companyProfile.employerId)
    "
    class="space-y-6"
  >
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
        v-model="companyProfile.companyEmail"
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

    <Button title="Update" wrapperClasses="px-16" type="submit" />
  </form>
</template>

<!-- SETUP -->
<script setup>
import { computed, ref, onMounted } from "vue";
import { useEmployesStore } from "../../stores/employerStore";
import { useAuthsStore } from "../../stores/authStore";
import { storeToRefs } from "pinia";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import Button from "../../components/Button/Button.vue";
import FormInput from "../../components/form/FormInput.vue";
import Textarea from "../../components/form/Textarea.vue";

// STATE
const { userState } = useAuthsStore();
const { getComapnyProfile, updteCompanyProfile } = useEmployesStore();
const { companyProfile, loading } = storeToRefs(useEmployesStore());

// METHODS
onMounted(() => {
  getComapnyProfile(userState.user.id);
});
</script>
