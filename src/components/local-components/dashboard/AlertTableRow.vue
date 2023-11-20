<template>
  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
    <!-- :v-for="data in alert" -->
    <td class="px-4 py-4">
      <FormCheck />
    </td>

    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {{ item.jobTitle }} <br />

      <div class="flex gap-2 flex-wrap mt-2">
        <Button isButton="true" :title="item.jobType" className="btn-sm-text" />
        <Button
          isButton="true"
          :title="item.isRemote ? 'Remote' : 'Not Remote'"
          className="btn-sm-text"
        />
      </div>
    </th>

    <td class="px-6 py-4">
      <span v-for="info in item.applicantInfo"
        >{{ info }}
        {{
          item.applicantInfo[item.applicantInfo.length - 1] === info ? "" : "| "
        }}
      </span>
      <p>{{ item.jobRole + " | " + "$" + item.salary + " per Month" }}</p>
    </td>

    <td class="px-6 py-4">{{ item.createdAt }}</td>

    <td class="px-6 py-4 flex gap-1">
      <template v-for="action in actions">
        <Button isButton="true" className="btn-icon" :beforeIcon="action" />
      </template>
    </td>
  </tr>
</template>

<script setup>
import FormCheck from "../form/FormCheck.vue";
import Button from "../buttons/Button.vue";
import { ref } from "vue";

defineProps(["item"]);

// State
const actions = ref(["icon-trash", "icon-eye-on"]);
</script>
