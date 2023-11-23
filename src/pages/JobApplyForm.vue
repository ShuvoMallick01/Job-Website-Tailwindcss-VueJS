<template>
  <!-- FILTER & JOB CARD -->
  <section class="myContainer mt-16 xl:px-52 bg-white dark:bg-slate-900">
    <div class="py-14 text-center">
      <h1 class="mb-2">Job Apply Form</h1>
      <p class="large-text">Job Title: Vue JS Developer</p>
    </div>

    <form class="space-y-6 pb-20">
      <SubSectionHeading headingName="Applicant Information:" />

      <div class="md:grid grid-cols-2 gap-5">
        <FormInput
          labelName="Your Name:"
          id="name"
          type="text"
          required
          placeholder="Type your Full Name"
        />

        <!-- Profession -->
        <FormInput
          labelName="Professional Title:"
          id="name"
          type="text"
          required
          placeholder="Type your Professional"
        />
      </div>

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Language -->
        <FormInput
          labelName="Language:"
          id="name"
          type="text"
          required
          placeholder="Type your Language"
        />

        <!-- Age -->
        <FormInput
          labelName="Age:"
          id="age"
          type="number"
          required
          placeholder="Type your Age"
        />
      </div>

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Current Salary ($) -->
        <FormInput
          labelName="Current Salary ($):"
          id="currentsalary"
          type="number"
          required
        />

        <!-- Expected Salary -->
        <FormInput
          labelName="Expected Salary:"
          id="expectedsalary"
          type="number"
          required
        />
      </div>

      <!-- Description -->
      <Textarea
        labelName="Description:"
        id="description"
        type="text"
        required
        rows="4"
        placeholder="Type your description"
      />

      <!-- Contact Information -->
      <SubSectionHeading headingName="Contact Information:" />

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Phone -->
        <FormInput
          labelName="Phone Number:"
          id="phoneNumber"
          type="number"
          required
        />

        <!-- Email -->
        <FormInput labelName="Email:" id="email" type="email" required />
      </div>

      <div class="md:grid grid-cols-2 gap-5">
        <!-- Country -->
        <FormInput labelName="Country:" id="country" type="text" required />

        <!-- Full Address -->
        <FormInput
          labelName="Full Adddress:"
          id="fullAddress"
          type="text"
          required
        />
      </div>

      <!-- Resume Upload -->
      <div>
        <SubSectionHeading headingName="Resume Upload:" />
        <div class="border text-center py-20 mb-10">
          <form action="">
            <h4 class="mb-2">Drop files here to upload</h4>
            <p class="small-text mb-5">
              To upload file size is (Max 5Mb) and allowed file types are (.doc,
              .docx, .pdf)
            </p>

            <Button
              title="Upload Resume"
              wrapperClasses="relative overflow-hidden"
            >
              <template #prefix>
                <input
                  class="absolute cursor-pointer left-0 top-0 opacity-0"
                  id="resumeupload"
                  type="file"
                />
              </template>
            </Button>
          </form>
        </div>

        <!-- Title -->
        <SubSectionHeading headingName="Uploaded Resume:" />

        <div class="flex justify-between">
          <p class="medium-text">
            <i class="icon-file me-2"></i>Shuvo Mallick Resume
            <span>| Version 1.0</span>
          </p>
          <Button title="Download"></Button>
        </div>
      </div>

      <Button title="Submit Application" wrapperClasses="px-10"></Button>
    </form>
  </section>
</template>

<!-- SCRIPT -->
<script setup>
import Button from "../components/global-components/Button/Button.vue";
import FormInput from "../components/global-components/form/FormInput.vue";
import Textarea from "../components/global-components/form/Textarea.vue";
import SubSectionHeading from "../components/local-components/dashboard/SubSectionHeading.vue";
</script>
