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
        <Button isButton="true" :title="job.jobType" className="btn-sm-text" />
        <Button
          isButton="true"
          :title="job.isRemote ? 'Remote' : 'Not Remote'"
          className="btn-sm-text"
        />
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
      <Button
        v-for="(item, index) in actions"
        :key="index"
        isButton="true"
        className="btn-icon"
        :beforeIcon="item"
      />
    </td>
  </tr>
</template>

<script setup>
import Checkbox from "../../../global-components/form/Checkbox.vue";
import Button from "../../../buttons/Button.vue";
import { ref } from "vue";

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
