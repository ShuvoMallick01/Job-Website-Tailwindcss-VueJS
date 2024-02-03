<template>
  <div :class="wrapperClasses">
    <label
      v-if="labelName"
      :for="$attrs.id"
      class="block mb-2"
      :class="{
        'form-label-gray': color === 'gray',
        'form-label-green': color === 'green',
        'required-mark': required,
      }"
      >{{ labelName }}
    </label>

    <select
      v-bind="$attrs"
      :required="required"
      :class="{
        'form-input-gray': color === 'gray',
        'form-input-green': color === 'green',
        'form-input-search': color === 'search',

        'form-input-size-lg': size === 'large',
        'form-input-size-md': size === 'medium',
        'form-input-size-sm': size === 'small',
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
  wrapperClasses: String,
  required: { type: Boolean, default: false },
  color: { type: String, default: "gray" },
  size: { type: String, default: "medium" },
});
</script>
