<template>
  <div class="mb-6">
    <label
      :for="formInput.name"
      class="block mb-2 formLabel"
      :class="formInput.required ? requiredUtilityStar : ''"
      >{{ formInput.title }}</label
    >
    <input
      :type="formInput.type"
      :id="formInput.name"
      v-model="formInput.value"
      class="inputPrimary"
      :placeholder="formInput.placeholder"
      :required="formInput.required"
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
  formInput: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>
