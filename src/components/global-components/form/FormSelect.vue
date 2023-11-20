<template>
  <div :class="parentClasses">
    <label
      v-if="labelName"
      :for="$attrs.id"
      class="block mb-2"
      :class="{
        'form-label-gray': labelColor === 'gray',
        'form-label-green': labelColor === 'green',

        'required-mark': required,
      }"
      >{{ labelName }}
    </label>

    <select
      v-bind="$attrs"
      :class="{
        'form-input-gray': inputColor === 'gray',
        'form-input-green': inputColor === 'green',
        'form-input-search': inputColor === 'search',

        'form-input-size-lg': inputSize === 'large',
        'form-input-size-md': inputSize === 'medium',
        'form-input-size-sm': inputSize === 'small',
      }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="(item, index) in optionList"
        :key="index"
        :value="item.value"
        :selected="!item.value"
      >
        {{ item.title }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  optionList: {
    type: Array,
    default: [],
    required: true,
  },

  modelValue: true,
  labelName: String,
  labelColor: { type: String, default: "gray" },
  required: { type: Boolean, default: false },
  inputColor: { type: String, default: "gray" },
  inputSize: { type: String, default: "medium" },
  parentClasses: String,
});
</script>
