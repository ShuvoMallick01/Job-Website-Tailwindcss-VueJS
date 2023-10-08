<template>
  <div class="mb-6">
    <label
      :for="formTextarea.name"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >{{ formTextarea.title }}</label
    >
    <textarea
      :type="formTextarea.type"
      :rows="formTextarea.rows"
      :id="formTextarea.name"
      class="inputPrimary"
      :placeholder="formTextarea.placeholder"
      :required="formTextarea.required"
    />
  </div>
</template>

<script setup>
defineProps({
  formTextarea: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>
