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

    <textarea
      v-bind="$attrs"
      :required="required"
      :class="{
        'form-input-gray': color === 'gray',
        'form-input-green': color === 'green',
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
  color: { type: String, default: "gray" },
  required: { type: Boolean, default: false },
});
</script>
