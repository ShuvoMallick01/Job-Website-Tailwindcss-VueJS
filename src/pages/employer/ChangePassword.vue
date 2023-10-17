<template>
  <!-- Title -->
  <SubSectionHeading :subHeading="subHeadingList[0]" />

  <!-- Form -->
  <form>
    <FormInput :formInput="formInputList[0]" />
    <FormInput :formInput="formInputList[1]" />
    <FormInput :formInput="formInputList[2]" />
    <BtnPrimary :title="'Confirm'" :class="'btn btn-primary'" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import SubSectionHeading from "../../components/dashboard/SubSectionHeading.vue";
import FormInput from "../../components/form/FormInput.vue";
import BtnPrimary from "../../components/buttons/BtnPrimary.vue";

const subHeadingList = ref([
  {
    title: "Password Change",
    btnTitle: "",
    btnIcon: "",
  },
]);

const formInputList = ref([
  {
    title: "Your old password:",
    name: "oldpassword",
    value: "",
    type: "password",
    placeholder: "",
    required: true,
  },
  {
    title: "Your password:",
    name: "password",
    value: "",
    type: "password",
    placeholder: "",
    required: true,
  },
  {
    title: "Repeat password:",
    name: "repeatpassword",
    value: "",
    type: "password",
    placeholder: "",
    required: true,
  },
]);
</script>
