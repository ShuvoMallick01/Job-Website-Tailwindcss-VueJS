<template>
  <h2 class="heading-paragraph mb-5 border-b pb-4 uppercase">
    COMPANY PROFILE
  </h2>

  <form>
    <div class="md:grid grid-cols-2 gap-5">
      <div class="mb-6">
        <!-- company name -->
        <label
          for="companyname"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Company Name (optional):</label
        >
        <input
          type="text"
          id="companyname"
          class="inputPrimary"
          placeholder="Ex.: Bit Skyber, Facebook"
        />
      </div>

      <!-- email -->
      <div class="mb-6">
        <label
          for="companyemail"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email:</label
        >
        <input
          type="email"
          id="companyemail"
          class="inputPrimary"
          placeholder="Ex.: company@domain.com"
          required
        />
      </div>
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- phone -->
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
          placeholder="Ex.: +88 0123456789"
          required
        />
      </div>

      <!-- website -->
      <div class="mb-6">
        <label
          for="website"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Website:</label
        >
        <input
          type="text"
          id="website"
          class="inputPrimary"
          placeholder="Ex.: www.name.com"
          required
        />
      </div>
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Est. Since -->
      <div class="mb-6">
        <label
          for="estsince"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Est. Since:</label
        >
        <input
          type="number"
          id="estsince"
          class="inputPrimary"
          placeholder=""
          required
        />
      </div>

      <!-- Team Size -->
      <div class="mb-6">
        <label
          for="teamsize"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Team Size:</label
        >
        <input
          type="number"
          id="teamsize"
          class="inputPrimary"
          placeholder=""
          required
        />
      </div>
    </div>

    <!-- about company -->
    <div class="mb-6">
      <label
        for="aboutcompany"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >About Company:</label
      >
      <textarea
        type="text"
        rows="4"
        id="aboutcompany"
        class="inputPrimary"
        placeholder="write about your company .."
        required
      />
    </div>

    <!-- SOCIAL NETWORK -->
    <h2 class="heading-paragraph mb-5 border-b pb-4 mt-10 uppercase">
      SOCIAL NETWORK
    </h2>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- FACEBOOK -->
      <div class="mb-6">
        <label
          for="facebook"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Facebook:</label
        >
        <input
          type="text"
          id="facebook"
          class="inputPrimary"
          placeholder=""
          required
        />
      </div>

      <!-- Linkdin -->
      <div class="mb-6">
        <label
          for="linkedin"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Twitter:</label
        >
        <input
          type="text"
          id="linkedin"
          class="inputPrimary"
          placeholder=""
          required
        />
      </div>
    </div>

    <!-- CONTACT INFORMATION -->
    <h2 class="heading-paragraph mb-5 border-b pb-4 mt-10 uppercase">
      CONTACT INFORMATION
    </h2>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- country -->
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

      <!-- city -->
      <div class="mb-6">
        <label
          for="city"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >City:</label
        >
        <input
          type="text"
          id="city"
          class="inputPrimary"
          placeholder=""
          required
        />
      </div>
    </div>

    <!-- Complete Address -->
    <div class="mb-6">
      <label
        for="completeaddress"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Complete Address:</label
      >
      <input
        type="text"
        id="completeaddress"
        class="inputPrimary"
        placeholder=""
        required
      />
    </div>

    <button type="submit" class="btn btn-primary px-16">Save</button>
  </form>
</template>

<script setup></script>
