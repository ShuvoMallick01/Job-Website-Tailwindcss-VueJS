<template>
  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
    <!-- :v-for="data in alert" -->
    <td class="px-4 py-4">
      <formCheckInputOnly />
    </td>

    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {{ alertItem.jobTitle }} <br />

      <div class="flex gap-2 flex-wrap mt-2">
        <span v-for="subCat in alertItem.jobCategory">
          <BtnExtraSmall :title="subCat" />
        </span>
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
        <BtnIcon :icon="action.icon" />
      </span>
    </td>
  </tr>
</template>

<script setup>
import formCheckInputOnly from "./form/formCheckInputOnly.vue";
import BtnIcon from "./buttons/BtnIcon.vue";
import BtnExtraSmall from "./buttons/BtnExtraSmall.vue";

defineProps(["alertItem"]);
</script>
