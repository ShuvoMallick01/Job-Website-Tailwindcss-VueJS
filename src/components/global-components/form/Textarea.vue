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

    <textarea
      v-bind="$attrs"
      :required="required"
      :class="{
        'form-input-gray': inputColor === 'gray',
        'form-input-green': inputColor === 'green',
      }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    </textarea>
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

  labelName: String,
  labelColor: { type: String, default: "gray" },

  inputColor: { type: String, default: "gray" },
  inputSize: { type: String, default: "medium" },
  required: { type: Boolean, default: false },
});
</script>
