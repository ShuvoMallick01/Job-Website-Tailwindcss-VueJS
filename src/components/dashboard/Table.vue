<template>
  <!-- Table -->
  <div class="overflow-x-auto shadow-md sm:rounded-lg">
    <table class="text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr class="flex justify-between">
          <th scope="col" class="px-4 py-3">
            <Checkbox />
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

      <tbody class="mt-5">
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<!-- SCRIPT  -->
<script setup>
import Checkbox from "../form/Checkbox.vue";

defineProps({
  fieldList: { type: Array },
});
</script>
