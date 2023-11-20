<template>
  <component
    :is="buttonComponent"
    :[linkAttr]="href"
    :disabled="buttonComponent === 'button' && disabled"
    v-bind="$attrs"
    class="font-[Poppins] whitespace-nowrap"
    :class="{
      filled: variant === 'filled',
      outline: variant === 'outline',

      primary: color === 'primary',
      secondary: color === 'secondary',
      'primary-light': color === 'primary-light',
      'secondary-light': color === 'secondary-light',
      disabled: color === 'disabled',

      'shape-pill': shape === 'pill',
      'shape-rounded': shape === 'rounded',
      'shape-square': shape === 'square',

      'btn-lg': size === 'large',
      'btn-md': size === 'medium',
      'btn-sm': size === 'small',
      'btn-xs': size === 'xsmall',

      'shadow-medium': shadow === 'medium',
      'shadow-large': shadow === 'large',
      'shadow-small': shadow === 'small',

      'transition-300': true,
      [wrapperClasses]: true,
    }"
  >
    <slot name="prefix"></slot>
    {{ title }}
    <slot name="suffix"></slot>
  </component>
</template>

<!-- SCRIPT -->
<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  wrapperClasses: String,

  color: { type: String, default: "primary" },
  variant: { type: String, default: "filled" },
  shape: { type: String, default: "pill" },
  size: { type: String, default: "medium" },

  href: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  shadow: String,
});

const buttonComponent = ref(props.href ? "router-link" : "button");
const linkAttr = ref(props.href ? "to" : "");
</script>
