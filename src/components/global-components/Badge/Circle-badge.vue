<template>
  <span
    v-bind="$attrs"
    :class="{
      filled: variant === 'filled',
      outline: variant === 'outline',

      primary: color === 'primary',
      'primary-light': color === 'primary-light',
      secondary: color === 'secondary',
      'secondary-light': color === 'secondary-light',
      gray: color === 'gray',

      'shape-circle': shape === 'circle',

      'circle-xl': size === 'extra-large',
      'circle-lg': size === 'large',
      'circle-md': size === 'medium',
      'circle-sm': size === 'small',

      'shadow-medium': shadow === 'medium',
      'shadow-large': shadow === 'large',
      'shadow-small': shadow === 'small',

      'transition-300 shrink-0': true,
    }"
  >
    <slot v-if="$slots.default"></slot>
  </span>
</template>

<!-- SCRIPT -->
<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  color: { type: String, default: "primary" },
  variant: { type: String, default: "filled" },
  shape: { type: String, default: "circle" },
  size: { type: String, default: "medium" },
  shadow: String,
});
</script>
