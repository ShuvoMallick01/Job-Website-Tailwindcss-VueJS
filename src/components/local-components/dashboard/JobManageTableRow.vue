<template>
  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
    <td class="px-4 py-4">
      <FormCheck />
    </td>
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {{ item.jobTitle }} <br />
      <div class="flex gap-2 mt-2">
        <Button
          isButton="true"
          :title="item.isRemote ? 'Remote' : 'Not Remote'"
          className="btn-sm-text"
        />
        <Button isButton="true" :title="item.jobType" className="btn-sm-text" />
        <Button isButton="true" :title="item.jobRole" className="btn-sm-text" />
      </div>
    </th>

    <td class="px-6 py-4">{{ item.applicantsId.length }} Applied</td>
    <td class="px-6 py-4">{{ item.isActice ? "Active" : "Deactive" }}</td>

    <td class="px-6 py-4 flex gap-1">
      <Button
        isButton="true"
        v-for="(item, index) in actionIcons"
        :beforeIcon="item"
        className="btn-icon"
        :key="index"
      />
    </td>
  </tr>
</template>

<script setup>
import { ref } from "vue";
import FormCheck from "../form/FormCheck.vue";
import Button from "../buttons/Button.vue";

// State
const actionIcons = ref(["icon-eye-on", "icon-edit", "icon-trash"]);

// Props
defineProps({
  item: {
    type: Object,
    defualt: {},
    required: true,
  },
});
</script>
