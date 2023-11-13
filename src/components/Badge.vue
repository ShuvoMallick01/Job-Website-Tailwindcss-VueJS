<template>
  <span
    v-bind="$attrs"
    :disabled="isDisabled"
    :class="{
      filled: variant === 'filled',
      outline: variant === 'outline',

      primary: color === 'primary',
      'primary-light': color === 'primary-light',
      secondary: color === 'secondary',
      'secondary-light': color === 'secondary-light',
      gray: color === 'gray',
      disabled: color === 'disabled',

      'shape-pill': shape === 'pill',
      'shape-rounded': shape === 'rounded',
      'shape-square': shape === 'square',
      'shape-circle': shape === 'circle',

      'badge-lg': size === 'large',
      'badge-md': size === 'medium',
      'badge-sm': size === 'small',

      'circle-md': size === 'circle-medium',
      'circle-lg': size === 'circle-large',
      'circle-sm': size === 'circle-small',

      'shadow-medium': shadow === 'medium',
      'shadow-large': shadow === 'large',
      'shadow-small': shadow === 'small',

      'transition-300': true,
    }"
  >
    <i v-if="prefix" :class="prefix" class="pe-1"></i>
    {{ title }}
    <i v-if="suffix" :class="suffix" class="ps-1"></i>
  </span>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  prefix: String,
  suffix: String,
  title: { type: String, required: true },

  color: { type: String, default: "primary" },
  variant: { type: String, default: "filled" },
  shape: { type: String, default: "pill" },
  size: { type: String, default: "medium" },

  isDisabled: { type: Boolean, default: false },
  shadow: String,
});
</script>

<style scoped>
/* Size */
.badge-md {
  padding: 2px 10px 2px 10px;
  font-size: 13px;
}
.badge-lg {
  padding: 4px 15px;
  @apply text-sm;
}
.badge-sm {
  padding: 1px 10px 2px 10px;
  @apply text-sm;
}
</style>
