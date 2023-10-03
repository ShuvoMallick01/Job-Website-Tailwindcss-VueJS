<template>
  <h2 class="heading-paragraph mb-5 border-b pb-4 uppercase">POST A NEW JOB</h2>

  <form>
    <div class="mb-6">
      <!-- Job title -->
      <label
        for="jobtitle"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Job Title:</label
      >
      <input
        type="text"
        id="jobtitle"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder=""
      />
    </div>

    <!-- Job Description -->
    <div class="mb-6">
      <label
        for="jobdescription"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Job Description:</label
      >
      <textarea
        type="text"
        rows="4"
        id="jobdescription"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="write about job .."
        required
      />
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Email -->
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email Address:</label
        >
        <input
          type="email"
          id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder=""
          required
        />
      </div>

      <!-- Username -->
      <div class="mb-6">
        <label
          for="username"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Username:</label
        >
        <input
          type="text"
          id="username"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder=""
          required
        />
      </div>
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Job Type -->
      <div class="mb-6">
        <label
          for="jobtype"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Job Type:</label
        >
        <select
          id="jobtype"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option value="" selected disabled>Select</option>
          <option value="fulltime">Full-Time</option>
          <option value="partime">Part-Time</option>
          <option value="internship">Internship</option>
          <option value="contact-freelance">Contract/Freelance</option>
          <option value="cofounder">Co-Founder</option>
        </select>
      </div>

      <!-- Job Roles -->
      <div class="mb-6">
        <label
          for="jobroles"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Job Roles:</label
        >
        <select
          id="jobtype"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option value="" selected disabled>Select</option>
          <option value="programming">Programming</option>
          <option value="design">Design</option>
          <option value="management-finance">Management / Finance</option>
          <option value="customer-support">Customer Support</option>
          <option value="sales-marketing">Sales / Marketing</option>
        </select>
      </div>
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Offered Salary -->
      <div class="mb-6">
        <label
          for="offeredsalary"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Offered Salary:</label
        >
        <input
          type="number"
          id="offeredsalary"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder=""
          required
        />
      </div>

      <!-- Remotely Only  -->
      <div class="mb-6">
        <label
          for="joblocationtype"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Remotely Only:</label
        >
        <select
          id="joblocationtype"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option value="" selected disabled>Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>

    <div class="md:grid grid-cols-2 gap-5">
      <!-- Company Name -->
      <div class="mb-6">
        <label
          for="companyname"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Company Name:</label
        >
        <input
          type="text"
          id="companyname"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder=""
          required
        />
      </div>

      <!-- Location  -->
      <div class="mb-6">
        <label
          for="location"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Location:</label
        >
        <select
          id="location"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option value="" selected disabled>Select</option>
          <option value="unitedstate">United Sate</option>
          <option value="canada">Canada</option>
          <option value="bangladesh">Bangladesh</option>
          <option value="europe">Europe</option>
        </select>
      </div>
    </div>

    <button type="submit" class="btn btn-primary px-16">Post</button>
  </form>
</template>

<script setup></script>
