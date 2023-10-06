<template>
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
          <th
            scope="col"
            class="px-6 py-3"
            v-for="field in fieldList"
            :key="field"
          >
            {{ field }}
          </th>
        </tr>
      </thead>

      <tbody>
        <AlertTableRow v-for="alertItem in alertList" :alertItem="alertItem" />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import AlertTableRow from "./AlertTableRow.vue";

defineProps({
  fieldList: { type: Array },
  alertList: {
    type: Array,
    default: [],
    required: true,
  },
});
</script>
