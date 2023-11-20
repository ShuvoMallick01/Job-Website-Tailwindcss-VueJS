<template>
  <div class="mb-6">
    <label
      :for="name"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      :class="required ? requiredUtilityStar : ''"
      >{{ labelName }}</label
    >
    <textarea
      class="inputPrimary"
      type="text"
      :rows="4"
      :id="name"
      :required="required"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <!-- required, placeholder  -->
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps(["modelValue", "name", "labelName", "required"]);

// State
const requiredUtilityStar = ref(
  "after:content-['*'] after:ml-0.5 after:text-red-500"
);
</script>
