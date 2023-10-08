<template>
  <div class="pb-4 mb-5 flex justify-between items-center border-b">
    <h2 class="heading-paragraph uppercase">Manage Jobs</h2>
    <div class="flex items-center">
      <p class="whitespace-nowrap me-2 description-text">Sort by Freshness</p>

      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>Last 3 Months</option>
        <option>Last 6 Months</option>
        <option>Last 9 Months</option>
        <option>Last 12 Months</option>
      </select>
    </div>
  </div>

  <!-- Table -->
  <div>
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
            <th scope="col" class="px-6 py-3">Applications</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          <JobManageTableRow />
          <JobManageTableRow />
          <JobManageTableRow />
          <JobManageTableRow />
          <JobManageTableRow />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import JobManageTableRow from "../../components/JobManageTableRow.vue";
</script>
