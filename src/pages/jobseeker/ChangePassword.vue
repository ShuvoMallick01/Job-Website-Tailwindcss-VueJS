<template>
  <!-- Title -->
  <SubSecHeading
    headingTitle="PASSWORD CHANGE"
    divClassName="mb-8 pb-3 border-b"
  />

  <!-- Form -->
  <form>
    <FormInput :formInput="formInputList[0]" />
    <FormInput :formInput="formInputList[1]" />
    <FormInput :formInput="formInputList[2]" />

    <Button isButton="true" title="Confirm" :className="'btn btn-primary'" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import FormInput from "../../components/form/FormInput.vue";
import SubSecHeading from "../../components/dashboard/SubSecHeading.vue";
import Button from "../../components/buttons/Button.vue";

const formInputList = ref([
  {
    title: "Your old password:",
    name: "oldpassword",
    type: "password",
    placeholder: "",
    required: true,
  },
  {
    title: "Your password:",
    name: "password",
    type: "password",
    placeholder: "",
    required: true,
  },
  {
    title: "Repeat password:",
    name: "repeatpassword",
    type: "password",
    placeholder: "",
    required: true,
  },
]);
</script>
