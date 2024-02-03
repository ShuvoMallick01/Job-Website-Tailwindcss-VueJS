<template>
  <!-- Title -->
  <SubSectionHeading headingName="EMPLOYER PROFILE" />

  <div v-if="loading">
    <p>Loading...</p>
  </div>

  <form
    v-else
    @submit.prevent="updateUserBasicInfo(userData, userData.id)"
    class="space-y-6"
  >
    <div class="md:grid grid-cols-2 gap-5">
      <!-- company name -->
      <FormInput
        labelName="Employer Name (optional):"
        id="companyName"
        type="text"
        required
        v-model="userData.name"
      />

      <!-- email -->
      <FormInput
        labelName="Email:"
        id="email"
        type="email"
        required
        v-model="userData.email"
      />
    </div>

    <!-- Profession -->
    <FormInput
      labelName="Profession:"
      id="profession"
      type="text"
      required
      v-model="userData.profession"
    />
    <Button title="Update" wrapperClasses="px-16" type="submit" />
  </form>
</template>

<!-- SETUP -->
<script setup>
import { onMounted } from "vue";
import { useEmployesStore } from "../../stores/employerStore";
import { useAuthsStore } from "../../stores/authStore";
import { storeToRefs } from "pinia";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import Button from "../../components/Button/Button.vue";
import FormInput from "../../components/form/FormInput.vue";

// STATE
const { userState, getUser, updateUserBasicInfo } = useAuthsStore();
const { userData } = storeToRefs(useAuthsStore());
const employerStore = useEmployesStore();
const { loading } = storeToRefs(employerStore);

// METHODS
onMounted(() => {
  getUser(userState.user.id);
});
</script>
