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
        v-model="employerStore.companyProfile.companyName"
      />

      <!-- email -->
      <FormInput
        labelName="Email:"
        id="email"
        type="email"
        required
        v-model="employerStore.companyProfile.companyEmail"
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- phone -->
      <FormInput
        labelName="Phone:"
        id="phone"
        type="number"
        required
        v-model="employerStore.companyProfile.phone"
      />

      <!-- website -->
      <FormInput
        labelName="Website:"
        id="website"
        type="text"
        required
        v-model="employerStore.companyProfile.website"
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Est. Since -->
      <FormInput
        labelName="Facebook:"
        id="facebook"
        type="text"
        required
        v-model="employerStore.companyProfile.facebook"
      />

      <!-- Team Size -->
      <FormInput
        labelName="Linkedin:"
        id="linkedin"
        type="text"
        required
        v-model="employerStore.companyProfile.linkedin"
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
      v-model="employerStore.companyProfile.aboutCompany"
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
        v-model="employerStore.companyProfile.estSince"
      />

      <!-- Team Size -->
      <FormInput
        labelName="Team Size:"
        id="teamSize"
        type="number"
        required
        v-model="employerStore.companyProfile.teamSize"
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
        v-model="employerStore.companyProfile.country"
      />

      <!-- city -->
      <FormInput
        labelName="City:"
        id="city"
        type="text"
        required
        v-model="employerStore.companyProfile.city"
      />
    </div>

    <!-- Complete Address -->
    <FormInput
      labelName="Complete Address:"
      id="completeAddress"
      type="text"
      required
      v-model="employerStore.companyProfile.completeAddress"
    />

    <Button :title="'Save'" wrapperClasses="px-16" type="submit" />
  </form>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useEmployesStore } from "../../stores/employerStore";
import { useAuthsStore } from "../../stores/authStore";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import Button from "../../components/Button/Button.vue";
import FormInput from "../../components/form/FormInput.vue";
import Textarea from "../../components/form/Textarea.vue";

// State
const { userState } = useAuthsStore();
const employerStore = useEmployesStore();
const condition = ref(false);

onMounted(() => {
  employerStore.getComapnyProfile(userState.user.id);
});
</script>
