<template>
  <div class="mb-5 border-b pb-4 flex justify-between items-center gap-4">
    <h2 class="heading-paragraph uppercase">Shortlisted Resumes</h2>
    <div class="flex gap-2 flex-wrap justify-end">
      <form>
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full md:w-40 xl:w-full py-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Applicants"
            required
          />
        </div>
      </form>

      <select
        id="countries"
        class="bg-gray-50 border description-text border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>Newest</option>
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
import ApplicantsCard from "../components/ApplicantsCard.vue";
</script>
