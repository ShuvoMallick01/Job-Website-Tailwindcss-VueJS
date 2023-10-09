<template>
  <div class="mb-6">
    <label
      :for="formTextarea.name"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      :class="formTextarea.required ? requiredUtilityStar : ''"
      >{{ formTextarea.title }}</label
    >
    <textarea
      :type="formTextarea.type"
      :rows="formTextarea.rows"
      :id="formTextarea.name"
      class="inputPrimary"
      v-model="formTextarea.value"
      :placeholder="formTextarea.placeholder"
      :required="formTextarea.required"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

// State
const requiredUtilityStar = ref(
  "after:content-['*'] after:ml-0.5 after:text-red-500"
);

defineProps({
  formTextarea: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>
