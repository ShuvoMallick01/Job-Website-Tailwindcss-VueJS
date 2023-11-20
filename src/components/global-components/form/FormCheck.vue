<template>
  <input
    class="text-primary-600 formCheckInput me-2"
    type="checkbox"
    v-bind="$attrs"
    :id="name"
    :value="value"
  />
  <label v-if="title" class="formLabel" :for="name">{{ title }}</label>
</template>

<script setup>
defineProps(["name", "title", "value", "modelValue"]);
// defineEmits(["update:modelValue"]);

// const toggleCheckbox = () => {
//   if (jobType.includes(value)) {
//     const updateValue = jobType.filter((val) => val !== value);
//     emit("update:jobType", updateValue);
//   } else {
//     const updateValue = [...jobType, value];
//     emit("update:jobType", updateValue);
//   }
// };
</script>
