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
      translucent: variant === 'translucent',

      primary: color === 'primary',
      secondary: color === 'secondary',
      disabled: color === 'disabled',

      'shape-circle': shape === 'circle',

      'circle-sm': size === 'small',
      'circle-md': size === 'medium',
      'circle-lg': size === 'large',
      'circle-xl': size === 'extra-large',

      'shadow-medium': shadow === 'medium',
      'shadow-large': shadow === 'large',
      'shadow-small': shadow === 'small',

      'transition-300': true,
      [wrapperClasses]: true,
    }"
  >
    <slot v-if="$slots.default"></slot>
  </component>
</template>

<!-- SCRIPT -->
<script setup>
import { ref } from "vue";

const props = defineProps({
  wrapperClasses: String,

  variant: { type: String, default: "filled" },
  color: { type: String, default: "primary" },
  shape: { type: String, default: "circle" },
  size: { type: String, default: "medium" },

  href: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  shadow: String,
});

const buttonComponent = ref(props.href ? "router-link" : "button");
const linkAttr = ref(props.href ? "to" : "");
</script>
