<template>
  <h2 class="heading-paragraph mb-5 border-b pb-4 uppercase">
    BASIC INFORMATION
  </h2>

  <form>
    <div class="md:grid grid-cols-2 gap-5">
      <div class="mb-6">
        <!-- Name -->
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your Name:</label
        >
        <input
          type="text"
          id="name"
          class="inputPrimary"
          placeholder="Ex.: Shuvo Mallick, John Smit"
          required
        />
      </div>

      <!-- Profession -->
      <div class="mb-6">
        <label
          for="profession"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Professional title:</label
        >
        <input
          type="text"
          id="profession"
          class="inputPrimary"
          placeholder="Ex.: Web Developer"
          required
        />
      </div>
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Language -->
      <div class="mb-6">
        <label
          for="language"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Language:</label
        >
        <input
          type="text"
          id="language"
          class="inputPrimary"
          placeholder="Ex.: Web Developer"
          required
        />
      </div>

      <!-- Age -->
      <div class="mb-6">
        <label
          for="age"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Age:</label
        >
        <input
          type="text"
          id="age"
          class="inputPrimary"
          placeholder="Ex.: 30, 28"
          required
        />
      </div>
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Current Salary ($) -->
      <div class="mb-6">
        <label
          for="currentsalary"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Current Salary ($):</label
        >
        <input
          type="text"
          id="currentsalary"
          class="inputPrimary"
          placeholder="Ex.: $2000"
          required
        />
      </div>

      <!-- Expected Salary -->
      <div class="mb-6">
        <label
          for="expectedsalary"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Expected Salary:</label
        >
        <input
          type="text"
          id="expectedsalary"
          class="inputPrimary"
          placeholder="Ex.: $3500"
          required
        />
      </div>
    </div>

    <!-- Description -->
    <div class="mb-6">
      <label
        for="description"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Description:</label
      >
      <textarea
        type="text"
        rows="4"
        id="description"
        class="inputPrimary"
        placeholder="About Your Self .."
        required
      />
    </div>

    <h2 class="heading-paragraph mb-5 border-b pb-4 mt-10 uppercase">
      CONTACT INFORMATION
    </h2>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Current Salary ($) -->
      <div class="mb-6">
        <label
          for="phone"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Phone:</label
        >
        <input
          type="number"
          id="phone"
          class="inputPrimary"
          placeholder="Ex.: +1 123 450 7890"
          required
        />
      </div>

      <!-- Email -->
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email Address</label
        >
        <input
          type="email"
          id="email"
          class="inputPrimary"
          placeholder="name@flowbite.com"
          required
        />
      </div>
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Country -->
      <div class="mb-6">
        <label
          for="country"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Country:</label
        >
        <input
          type="text"
          id="country"
          class="inputPrimary"
          placeholder=""
          required
        />
      </div>

      <!-- Full Address -->
      <div class="mb-6">
        <label
          for="fulladdress"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Full Address</label
        >
        <input
          type="text"
          id="fulladdress"
          class="inputPrimary"
          placeholder=""
          required
        />
      </div>
    </div>

    <button type="submit" class="btn btn-primary">Save Setting</button>
  </form>
</template>

<script setup>
import JobPostCard from "../components/JobPostCard.vue";
</script>
