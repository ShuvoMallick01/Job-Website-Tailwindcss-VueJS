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

    <span :class="inputClasses">
      <slot name="prefix"></slot>
      <input
        :required="required"
        v-bind="$attrs"
        :class="{
          'form-input-gray': color === 'gray',
          'form-input-green': color === 'green',

          'form-input-size-lg': size === 'large',
          'form-input-size-md': size === 'medium',
          'form-input-size-sm': size === 'small',

          'search-input-size-md': size === 'medium-search',
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
  required: { type: Boolean, default: false },
  color: { type: String, default: "gray" },
  size: { type: String, default: "medium" },
  inputSize: String,
});
</script>

<!-- STYLE -->
<style scoped>
.search-input-size-md {
  @apply w-full py-2.5 pe-2.5 ps-9;
}
</style>
