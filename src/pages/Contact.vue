<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mb-16 mt-20">
    <div class="py-8 text-center">
      <h1>CONTACT</h1>
    </div>

    <div class="mb-24 lg:px-32 lg:mx-32 2xl:px-52 2xl:mx-52">
      <form @submit.prevent="handleForm" class="space-y-6">
        <FormInput
          labelName="Your Name:"
          id="name"
          type="text"
          required
          placeholder="Type your Full Name"
          v-model="formData.name"
        />

        <FormInput
          labelName="Your Email:"
          id="email"
          type="email"
          required
          placeholder="Type your Email"
          v-model="formData.email"
        />

        <!-- Description -->
        <Textarea
          labelName="Your Message:"
          id="message"
          type="text"
          required
          rows="4"
          placeholder="Type your description"
          v-model="formData.message"
        />

        <Checkbox v-model="formData.agreeTC">
          <label for="terms" class="ml-2 small-text"
            >I agree with the
            <a
              href="#"
              class="text-secondary hover:underline dark:text-secondaryLight"
              >terms and conditions</a
            ></label
          >
        </Checkbox>

        <Button title="Send Message" type="submit" wrapperClasses="px-10" />
      </form>
    </div>
  </section>
</template>

<!-- SCRIPT -->
<script setup>
import Button from "../components/Button/Button.vue";
import FormInput from "../components/form/FormInput.vue";
import Textarea from "../components/form/Textarea.vue";
import Checkbox from "../components/form/Checkbox.vue";
import { ref } from "vue";

// State
const formData = ref({
  name: "",
  email: "",
  message: "",
  agreeTC: false,
});

// Methods
const handleForm = () => {
  console.log(formData.value);
};
</script>
