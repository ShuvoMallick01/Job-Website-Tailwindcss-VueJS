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
      :required="$attrs.required"
      >{{ labelName }}
    </label>

    <textarea
      v-if="textarea"
      v-bind="$attrs"
      rows="4"
      cols="50"
      :class="{
        'form-input-gray': inputColor === 'gray',
        'form-input-green': inputColor === 'green',
      }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    </textarea>

    <span v-else class="relative" :class="inputClasses">
      <slot name="prefixIcon"></slot>

      <input
        v-bind="$attrs"
        :class="{
          'form-input-gray': inputColor === 'gray',
          'form-input-green': inputColor === 'green',
          'form-input-search': inputColor === 'search',

          'form-input-size-lg': inputSize === 'large',
          'form-input-size-md': inputSize === 'medium',
          'form-input-size-sm': inputSize === 'small',

          'search-input-size-md': inputSize === 'search-medium',
        }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <slot name="suffixIcon"></slot>
    </span>
  </div>
</template>

<!-- SCIRPT -->
<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  prefixIcon: String,
  suffixIcon: String,
  parentClasses: String,

  required: { type: Boolean, default: false },
  modelValue: { type: String, default: "" },

  labelName: String,
  labelColor: { type: String, default: "gray" },

  inputColor: { type: String, default: "gray" },
  inputSize: { type: String, default: "medium" },
  inputClasses: String,

  textarea: { type: Boolean, default: false },
});
</script>
