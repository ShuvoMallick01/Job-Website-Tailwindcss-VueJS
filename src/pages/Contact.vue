<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mb-16 mt-20">
    <div class="py-8 text-center">
      <h1 class="sectionHeading">CONTACT</h1>
    </div>

    <div class="mb-24 lg:px-32 lg:mx-32 2xl:px-52 2xl:mx-52">
      <form>
        <FormInput :formInput="formInputList[0]" />
        <FormInput :formInput="formInputList[1]" />
        <FormTextarea :formTextarea="formTextareaList[0]" />

        <div class="flex items-start mb-6 mt-6">
          <div class="flex items-center h-5">
            <FormCheckInputOnly />
          </div>

          <label
            for="terms"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >I agree with the
            <a
              href="#"
              class="text-secondary hover:underline dark:text-secondaryLight"
              >terms and conditions</a
            ></label
          >
        </div>

        <Btn_Primary :title="'Send'" :class="'px-10'" />
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import FormCheckInputOnlyVue from "../components/form/FormCheckInputOnly.vue";
import FormInput from "../components/form/FormInput.vue";
import FormTextarea from "../components/form/FormTextarea.vue";
import FormCheckInputOnly from "../components/form/FormCheckInputOnly.vue";
import Btn_Primary from "../components/buttons/Btn_Primary.vue";

const formInputList = ref([
  {
    title: "Your Name:",
    name: "name",
    value: "",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Your Email:",
    name: "email",
    value: "",
    type: "email",
    placeholder: "",
    required: true,
  },
]);

const formTextareaList = ref([
  {
    type: "text",
    title: "Your Message:",
    name: "message",
    value: "",
    placeholder: "",
    required: true,
    rows: 4,
  },
]);
</script>
