<template>
  <!-- Title -->
  <SubSectionHeading headingName="PASSWORD CHANGE" />

  <!-- Form -->
  <form @submit.prevent="handleFormData()" class="space-y-6">
    <FormInput
      labelName="Old password:"
      id="oldPassword"
      type="password"
      required
      placeholder="Type your old Password"
      v-model="formData.oldPassword"
    />
    <FormInput
      labelName="New password:"
      id="newPassword"
      type="password"
      required
      placeholder="Type your new Password"
      v-model="formData.newPassword"
    />
    <FormInput
      labelName="Repeat Password:"
      id="repeatPassword"
      type="password"
      required
      placeholder="Type your Repeat Password"
      v-model="formData.repeatPassword"
    />

    <Button title="Confirm" wrapperClasses="px-10" />
  </form>
</template>

<!-- SCRIPT -->
<script setup>
import { ref } from "vue";
import FormInput from "../../components/form/FormInput.vue";
import Button from "../../components/Button/Button.vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import { useAuthsStore } from "../../stores/authStore";

const authsStore = useAuthsStore();
const formData = ref({
  oldPassword: "",
  newPassword: "",
  repeatPassword: "",
});

const handleFormData = () => {
  if (formData.value.newPassword !== formData.value.repeatPassword)
    return window.alert("New Password Doesn't Match");

  const data = { ...formData.value };
  delete data.repeatPassword;
  // console.log(data);

  authsStore.handlePasswordChange(data);

  formData.value.oldPassword = "";
  formData.value.newPassword = "";
  formData.value.repeatPassword = "";
};
</script>
