<template>
  <div :class="wrapperClasses">
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

    <span :class="inputClasses">
      <slot name="prefix"></slot>

      <input
        :required="required"
        v-bind="$attrs"
        :class="{
          'form-input-gray': inputColor === 'gray',
          'form-input-green': inputColor === 'green',

          'form-input-size-lg': inputSize === 'large',
          'form-input-size-md': inputSize === 'medium',
          'form-input-size-sm': inputSize === 'small',

          'search-input-size-md': inputSize === 'medium-search',
        }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <slot name="suffix"></slot>
    </span>
  </div>
</template>

<!-- SCIRPT -->
<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  modelValue: true,
  wrapperClasses: String,
  inputClasses: String,

  labelName: String,
  labelColor: { type: String, default: "gray" },
  required: { type: Boolean, default: false },

  inputColor: { type: String, default: "gray" },
  inputSize: { type: String, default: "medium" },
});
</script>
