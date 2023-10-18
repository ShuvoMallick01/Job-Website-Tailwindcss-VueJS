<template>
  <tr
    v-for="item in jobList"
    class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
  >
    <td class="px-4 py-4">
      <FormCheck />
    </td>
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {{ item.jobTitle }} <br />
      <div class="flex gap-2 mt-2">
        <BtnExtraSmall :title="item.isRemote ? 'Remote' : 'Not Remote'" />
        <BtnExtraSmall :title="item.jobType" />
        <BtnExtraSmall :title="item.location" />
        <Button
          isButton="true"
          :title="item.isRemote ? 'Remote' : 'Not Remote'"
          className="btn-sm-text"
        />
      </div>
    </th>

    <td class="px-6 py-4">{{ item.applicants }} Applied</td>
    <td class="px-6 py-4">{{ item.status ? "Active" : "Deactive" }}</td>

    <td class="px-6 py-4 flex gap-1">
      <BtnIcon v-for="(item, index) in actionIcons" :icon="item" :key="index" />
    </td>
  </tr>
</template>

<script setup>
import { ref } from "vue";
import FormCheckInputOnly from "../../components/form/FormCheckInputOnly.vue";
import BtnExtraSmall from "../buttons/BtnExtraSmall.vue";
import BtnIcon from "../buttons/BtnIcon.vue";
import FormCheck from "../form/FormCheck.vue";
import Button from "../buttons/Button.vue";

const actionIcons = ref(["icon-eye-on", "icon-edit", "icon-trash"]);

defineProps({
  jobList: {
    type: Array,
    defualt: [],
    required: true,
  },
});
</script>
