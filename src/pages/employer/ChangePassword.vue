<template>
  <!-- Title -->
  <SubSectionHeading headingName="PASSWORD CHANGE" />

  <!-- Form -->
  <form class="space-y-6">
    <FormInput
      labelName="Old password:"
      id="oldPassword"
      type="password"
      required
      placeholder="Type your old Password"
    />
    <FormInput
      labelName="New password:"
      id="newPassword"
      type="password"
      required
      placeholder="Type your new Password"
    />
    <FormInput
      labelName="Repeat Password:"
      id="repeatPassword"
      type="password"
      required
      placeholder="Type your Repeat Password"
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
</script>
