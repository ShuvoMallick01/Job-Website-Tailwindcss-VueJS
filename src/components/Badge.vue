<template>
  <span
    v-bind="$attrs"
    :class="{
      filled: variant === 'filled',
      outline: variant === 'outline',
      'text-only': variant === 'text',

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
      'text-md': size === 'text-medium',

      'circle-xl': size === 'circle-extralarge',
      'circle-lg': size === 'circle-large',
      'circle-md': size === 'circle-medium',
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
  shadow: String,
});
</script>

<style scoped>
/* Size */
.badge-lg {
  padding: 4px 15px;
  @apply text-sm;
}
.badge-md {
  padding: 2px 10px 2px 10px;
  font-size: 13px;
}

.badge-sm {
  padding: 1px 10px 2px 10px;
  @apply text-sm;
}
.text-md {
  padding: 4px 15px;
  @apply text-base font-medium;
}
</style>
