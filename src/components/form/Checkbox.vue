<template>
  <input :class="className" type="checkbox" v-bind="$attrs" />
  <slot v-if="$slots.default"></slot>
  <label v-else class="form-label" :for="$attrs.id">{{ label }}</label>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  label: String,
  className: { type: String, default: "form-checkbox me-2" },
});
</script>
