<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mb-16 mt-20">
    <div class="py-8 text-center">
      <h1>CONTACT</h1>
    </div>

    <div class="mb-24 lg:px-32 lg:mx-32 2xl:px-52 2xl:mx-52">
      <form class="space-y-6">
        <FormInput
          labelName="Your Name:"
          id="name"
          type="text"
          required
          placeholder="Type your Full Name"
        />

        <FormInput
          labelName="Your Email:"
          id="email"
          type="email"
          required
          placeholder="Type your Email"
        />

        <!-- Description -->
        <Textarea
          labelName="Your Message:"
          id="message"
          type="text"
          required
          rows="4"
          placeholder="Type your description"
        />

        <Checkbox>
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

<script setup>
import Button from "../components/global-components/Button/Button.vue";
import FormInput from "../components/global-components/form/FormInput.vue";
import Textarea from "../components/global-components/form/Textarea.vue";
import Checkbox from "../components/global-components/form/Checkbox.vue";
</script>
