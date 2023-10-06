<template>
  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
    <!-- :v-for="data in alert" -->
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
      {{ alertItem.jobTitle }} <br />
      <div class="flex gap-2 flex-wrap mt-2">
        <p class="btn-sm-text" v-for="subCat in alertItem.jobCategory">
          {{ subCat }}
        </p>
      </div>
    </th>
    <td class="px-6 py-4">
      <span v-for="info in alertItem.applicantInfo"
        >{{ info }}
        {{
          alertItem.applicantInfo[alertItem.applicantInfo.length - 1] === info
            ? ""
            : "| "
        }}
      </span>
    </td>
    <td class="px-6 py-4">{{ alertItem.times }} ago</td>

    <td class="px-6 py-4 flex gap-1">
      <span v-for="action in alertItem.actions">
        <a href="#" class="btn-icon"><i :class="action.icon"></i></a>
      </span>
    </td>
  </tr>
</template>

<script setup>
defineProps(["alertItem"]);
</script>
