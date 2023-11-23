<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mb-16 mt-20">
    <div class="py-8 text-center">
      <h1 class="sectionHeading">CONTACT</h1>
    </div>

    <div class="mb-24 lg:px-32 lg:mx-32 2xl:px-52 2xl:mx-52">
      <!-- <form>
        <FormInput :formInput="formInputList[0]" />
        <FormInput :formInput="formInputList[1]" />

        <Textarea :labelName="'Your Message'" :required="true" name="message" />

        <div class="flex items-start mt-6">
          <div class="flex items-center h-5">
            <FormCheck />
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

        <Button
          isButton="true"
          type="submit"
          title="Send Message"
          className="btn btn-primary my-10"
        />
      </form> -->
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
// import FormInput from "../components/form/FormInput.vue";
// import FormCheck from "../components/form/FormCheck.vue";
// import Textarea from "../components/form/Textarea.vue";
// import Button from "../components/buttons/Button.vue";

const formInputList = ref([
  {
    title: "Your Name:",
    name: "name",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    title: "Your Email:",
    name: "email",
    type: "email",
    placeholder: "",
    required: true,
  },
]);
</script>
