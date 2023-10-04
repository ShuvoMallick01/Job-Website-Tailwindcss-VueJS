<template>
  <h2 class="heading-paragraph mb-5 border-b pb-4 uppercase">Resume Alerts</h2>

  <!-- Table -->
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-4 py-3">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </th>
          <th scope="col" class="px-6 py-3">Job Title</th>
          <th scope="col" class="px-6 py-3">Applicant Details</th>
          <th scope="col" class="px-6 py-3">Times</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>

      <tbody>
        <AlertTableRow />
        <AlertTableRow />
        <AlertTableRow />
        <AlertTableRow />
        <AlertTableRow />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import AlertTableRow from "../components/AlertTableRow.vue";
</script>
