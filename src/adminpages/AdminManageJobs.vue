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
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td class="px-4 py-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Software Engineer (Android), Libraries <br />
              <div class="flex gap-2 mt-2">
                <span class="description-sm-text"
                  ><i class="icon-briefcase me-1"></i>Full Time</span
                >
                <span class="description-sm-text"
                  ><i class="icon-device-laptop me-1"></i>Remote</span
                >
                <span class="description-sm-text"
                  ><i class="icon-map me-1"></i>London, UK</span
                >
              </div>
            </th>
            <td class="px-6 py-4">5 Applied</td>
            <td class="px-6 py-4">Active</td>

            <td class="px-6 py-4 flex gap-1">
              <a href="#" class="btn-icon"><i class="icon-eye-on"></i></a>
              <a href="#" class="btn-icon"><i class="icon-edit"></i></a>
              <a href="#" class="btn-icon"><i class="icon-trash"></i></a>
            </td>
          </tr>
          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <td class="px-4 py-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Software Engineer (Android), Libraries <br />
              <div class="flex gap-2 mt-2">
                <span class="description-sm-text"
                  ><i class="icon-briefcase me-1"></i>Full Time</span
                >
                <span class="description-sm-text"
                  ><i class="icon-device-laptop me-1"></i>Remote</span
                >
                <span class="description-sm-text"
                  ><i class="icon-map me-1"></i>London, UK</span
                >
              </div>
            </th>
            <td class="px-6 py-4">5 Applied</td>
            <td class="px-6 py-4">Active</td>

            <td class="px-6 py-4 flex gap-1">
              <a href="#" class="btn-icon"><i class="icon-eye-on"></i></a>
              <a href="#" class="btn-icon"><i class="icon-edit"></i></a>
              <a href="#" class="btn-icon"><i class="icon-trash"></i></a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td class="px-4 py-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Software Engineer (Android), Libraries <br />
              <div class="flex gap-2 mt-2">
                <span class="description-sm-text"
                  ><i class="icon-briefcase me-1"></i>Full Time</span
                >
                <span class="description-sm-text"
                  ><i class="icon-device-laptop me-1"></i>Remote</span
                >
                <span class="description-sm-text"
                  ><i class="icon-map me-1"></i>London, UK</span
                >
              </div>
            </th>
            <td class="px-6 py-4">5 Applied</td>
            <td class="px-6 py-4">Active</td>

            <td class="px-6 py-4 flex gap-1">
              <a href="#" class="btn-icon"><i class="icon-eye-on"></i></a>
              <a href="#" class="btn-icon"><i class="icon-edit"></i></a>
              <a href="#" class="btn-icon"><i class="icon-trash"></i></a>
            </td>
          </tr>
          <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <td class="px-4 py-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Software Engineer (Android), Libraries <br />
              <div class="flex gap-2 mt-2">
                <span class="description-sm-text"
                  ><i class="icon-briefcase me-1"></i>Full Time</span
                >
                <span class="description-sm-text"
                  ><i class="icon-device-laptop me-1"></i>Remote</span
                >
                <span class="description-sm-text"
                  ><i class="icon-map me-1"></i>London, UK</span
                >
              </div>
            </th>
            <td class="px-6 py-4">5 Applied</td>
            <td class="px-6 py-4">Active</td>

            <td class="px-6 py-4 flex gap-1">
              <a href="#" class="btn-icon"><i class="icon-eye-on"></i></a>
              <a href="#" class="btn-icon"><i class="icon-edit"></i></a>
              <a href="#" class="btn-icon"><i class="icon-trash"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup></script>
