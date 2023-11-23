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
      <div class="flex gap-2 mt-2">
        <Badge :title="item.jobType" color="gray" />
        <Badge :title="item.jobRole" color="gray" />
        <Badge :title="item.isRemote ? 'Remote' : 'Not Remote'" color="gray" />
      </div>
    </th>

    <td class="px-6 py-4">{{ item.applicantsId.length }} Applied</td>
    <td class="px-6 py-4">{{ item.isActice ? "Active" : "Deactive" }}</td>

    <td class="px-6 py-4 flex gap-1">
      <IconButton name="icon" color="secondary-light">
        <i class="icon-eye-on"></i
      ></IconButton>
      <IconButton name="icon" color="secondary-light">
        <i class="icon-edit"></i
      ></IconButton>
      <IconButton name="icon" color="secondary-light">
        <i class="icon-trash"></i
      ></IconButton>
    </td>
  </tr>
</template>

<script setup>
import { ref } from "vue";
import Button from "../../../global-components/Button/Button.vue";
import IconButton from "../../../global-components/Button/IconButton.vue";
import Badge from "../../../global-components/Badge/Badge.vue";
import Checkbox from "../../../global-components/form/Checkbox.vue";

// Props
defineProps({
  item: {
    type: Object,
    defualt: {},
    required: true,
  },
});
</script>
