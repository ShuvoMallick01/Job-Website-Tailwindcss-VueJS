<template>
  <div class="mb-6">
    <label :for="formInput.name" class="block mb-2 formLabel">{{
      formInput.title
    }}</label>
    <input
      :type="formInput.type"
      :id="formInput.name"
      :value="formInput.value"
      class="inputPrimary"
      :placeholder="formInput.placeholder"
      :required="formInput.required"
    />
  </div>
</template>

<script setup>
defineProps({
  formInput: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>
