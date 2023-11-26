<template>
  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
    <td class="px-4 py-4">
      <Checkbox />
    </td>

    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {{ item.jobTitle }} <br />

      <div class="flex gap-2 flex-wrap mt-2">
        <Badge :title="item.jobType" color="gray" />
        <Badge :title="item.isRemote ? 'Remote' : 'Not Remote'" color="gray" />
      </div>
    </th>

    <td class="px-6 py-4">
      <span v-for="info in item.applicantInfo"
        >{{ info }}
        {{
          item.applicantInfo[item.applicantInfo.length - 1] === info ? "" : "| "
        }}
      </span>
      <p>{{ item.jobRole + " | " + "$" + item.salary + "/Month" }}</p>
    </td>

    <td class="px-6 py-4">{{ item.createdAt }}</td>

    <td class="px-6 py-4 flex gap-1 items-center h-full my-3">
      <IconButton variant="translucent" color="secondary">
        <i class="icon-trash"></i
      ></IconButton>

      <IconButton variant="translucent" color="secondary">
        <i class="icon-eye-on"></i
      ></IconButton>
    </td>
  </tr>
</template>

<!-- SCRIPT -->
<script setup>
import { ref } from "vue";
import IconButton from "../../Button/IconButton.vue";
import Badge from "../../Badge/Badge.vue";
import Checkbox from "../../form/Checkbox.vue";

defineProps(["item"]);
const actions = ref(["icon-trash", "icon-eye-on"]);
</script>
