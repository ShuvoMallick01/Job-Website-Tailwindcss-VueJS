<template>
  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
    <!-- :v-for="data in alert" -->
    <td class="px-4 py-4">
      <Checkbox />
    </td>

    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {{ job.jobTitle }} <br />

      <div class="flex gap-2 flex-wrap mt-2">
        <Badge :title="job.jobType" color="gray" />
        <Badge :title="job.isRemote ? 'Remote' : 'Not Remote'" color="gray" />
      </div>
    </th>

    <td class="px-6 py-4">
      <p>Shuvo Mallick | B.Sc | Bangladesh</p>
      <!-- <span v-for="info in item.applicantInfo"
        >{{ info }}
        {{
          item.applicantInfo[item.applicantInfo.length - 1] === info ? "" : "| "
        }}
      </span>
      <p>{{ item.jobRole + " | " + "$" + item.salary + " per Month" }}</p> -->
    </td>

    <td class="px-6 py-4">{{ job.createdAt }}</td>

    <td class="px-6 py-4 flex gap-1">
      <IconButton variant="translucent" name="icon" color="secondary">
        <i class="icon-eye-on"></i
      ></IconButton>
      <IconButton variant="translucent" name="icon" color="secondary">
        <i class="icon-trash"></i
      ></IconButton>
    </td>
  </tr>
</template>

<script setup>
import { ref } from "vue";
import IconButton from "../../Button/IconButton.vue";
import Badge from "../../Badge/Badge.vue";
import Checkbox from "../../form/Checkbox.vue";

// State
const actions = ref(["icon-trash", "icon-eye-on"]);

// Props
defineProps({
  job: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>
