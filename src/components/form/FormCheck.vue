<template>
  <div class="form-check" v-bind="$attrs">
    <input
      class="mr-2 focus:ring-0"
      type="checkbox"
      :id="name"
      :value="value"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label v-if="title" class="formLabel" :for="name">{{ title }}</label>
  </div>
</template>

<script setup>
defineProps(["name", "title", "value", "modelValue"]);
defineEmits(["update:modelValue"]);

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
