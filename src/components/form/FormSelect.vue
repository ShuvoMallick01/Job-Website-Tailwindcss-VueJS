<template>
  <label for="countries" class="block mb-2 formLabel">{{ labelName }}</label>
  <select
    id="location"
    class="inputPrimary"
    :class="className"
    required
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <option
      v-for="(item, index) in optionList"
      :key="index"
      :value="item.value"
      :selected="item.value"
    >
      {{ item.title }}
    </option>
  </select>
</template>

<script setup>
defineProps({
  optionList: {
    type: Array,
    default: [],
    required: true,
  },
  modelValue: {},
  labelName: {},
  className: {},
});
</script>
