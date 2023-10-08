<template>
  <div class="mb-5 border-b pb-4 flex justify-between items-center gap-4">
    <h2 class="heading-paragraph uppercase">POST A NEW JOB</h2>
    <div class="flex gap-2">
      <select
        id="countries"
        class="bg-gray-50 border description-text border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>Select Jobs</option>
        <option>Last 3 Months</option>
        <option>Last 6 Months</option>
        <option>Last 9 Months</option>
        <option>Last 12 Months</option>
      </select>

      <select
        id="countries"
        class="bg-gray-50 border description-text border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>All Status</option>
        <option>Last 3 Months</option>
        <option>Last 6 Months</option>
        <option>Last 9 Months</option>
        <option>Last 12 Months</option>
      </select>
    </div>
  </div>

  <div
    class="flex gap-2 flex-shrink-0 pt-3 pb-6 whitespace-nowrap items-center justify-between"
  >
    <h4 class="heading-regular">Senior Product Designer</h4>
    <div class="flex gap-2 description-sm-text flex-wrap justify-end">
      <span class="text btn-sm-text">Total(s): 6</span>
      <span class="text btn-sm-text">Approved: 2</span>
      <span class="text btn-sm-text">Rejected(s): 4</span>
    </div>
  </div>

  <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
    <ApplicantsCard />
    <ApplicantsCard />
    <ApplicantsCard />
    <ApplicantsCard />
    <ApplicantsCard />
    <ApplicantsCard />
  </div>
</template>

<script setup>
import ApplicantsCard from "../../components/ApplicantsCard.vue";
</script>
