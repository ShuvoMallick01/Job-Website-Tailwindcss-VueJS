<template>
  <component
    :is="buttonComponent"
    :[linkAttr]="href"
    :disabled="buttonComponent === 'button' && disabled"
    v-bind="$attrs"
    :class="{
      // [getButtonColor]: true,
      filled: variant === 'filled',
      outline: variant === 'outline',

      primary: color === 'primary',
      secondary: color === 'secondary',
      disabled: color === 'disabled',
      'primary-light': color === 'primary-light',

      'shape-pill': shape === 'pill',
      'shape-rounded': shape === 'rounded',
      'shape-square': shape === 'square',
      'shape-circle': shape === 'circle',

      'shape-s-pill': shape === 'start-pill',
      'shape-e-pill': shape === 'end-pill',
      'shape-s-rounded': shape === 'start-rounded',
      'shape-e-rounded': shape === 'end-rounded',

      'btn-lg': size === 'large',
      'btn-md': size === 'medium',
      'btn-sm': size === 'small',
      'btn-xs': size === 'xsmall',

      'circle-md': size === 'circle-medium',
      'circle-lg': size === 'circle-large',
      'circle-sm': size === 'circle-small',

      'icon-lg': size === 'icon-large',
      'icon-md': size === 'icon-medium',
      'icon-sm': size === 'icon-small',

      'shadow-medium': shadow === 'medium',
      'shadow-large': shadow === 'large',
      'shadow-small': shadow === 'small',

      'transition-300': true,
    }"
  >
    <i v-if="prefixIcon" :class="prefixIcon"></i>
    {{ title }}
    <i v-if="suffixIcon" :class="suffixIcon"></i>
  </component>
</template>

<!-- SCRIPT -->
<script setup>
import { ref } from "vue";

const props = defineProps({
  prefixIcon: String,
  suffixIcon: String,
  title: String,

  color: { type: String, default: "primary" },
  variant: { type: String, default: "filled" },
  shape: { type: String, default: "pill" },
  size: { type: String, default: "btn-md" },

  href: { type: String, default: "" },

  disabled: { type: Boolean, default: false },
  shadow: String,
});

const buttonComponent = ref(props.href ? "router-link" : "button");
const linkAttr = ref(props.href ? "to" : "");
</script>
