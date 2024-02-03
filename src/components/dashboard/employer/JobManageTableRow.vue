<template>
  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
    <td class="px-4 py-4">
      <Checkbox />
    </td>
    <td
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {{ item.jobTitle }} <br />
      <div class="flex gap-2 mt-2">
        <Badge :title="item.jobType" color="gray" />
        <Badge :title="item.jobRole" color="gray" />
        <Badge :title="item.isRemote ? 'Remote' : 'Not Remote'" color="gray" />
      </div>
    </td>

    <td class="px-6 py-4">{{ item.applicantsId.length }} Applied</td>
    <td class="px-6 py-4">{{ item.isActice ? "Active" : "Deactive" }}</td>

    <td class="px-6 py-4 flex gap-1">
      <IconButton variant="translucent" name="icon" color="secondary">
        <i class="icon-eye-on"></i
      ></IconButton>
      <IconButton variant="translucent" name="icon" color="secondary">
        <i class="icon-edit"></i
      ></IconButton>
      <IconButton variant="translucent" name="icon" color="secondary">
        <i class="icon-trash"></i
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

// Props
defineProps({
  item: {
    type: Object,
    defualt: {},
    required: true,
  },
});
</script>
