<template>
  <component
    :is="buttonComponent"
    :[linkAttr]="href"
    v-bind="$attrs"
    class="whitespace-nowrap"
    :class="{
      primary: color === 'primary',
      secondary: color === 'secondary',
      'primary-light': color === 'primary-light',
      'secondary-light': color === 'secondary-light',
      disabled: color === 'disabled',

      sm: size === 'small',
      md: size === 'medium',
      lg: size === 'large',

      'shadow-medium': shadow === 'medium',
      'shadow-large': shadow === 'large',
      'shadow-small': shadow === 'small',

      'transition-300': true,
      [wrapperClasses]: true,
    }"
  >
    <i v-if="prefixIcon" :class="prefixIcon"></i>
    {{ title }}
    <span :class="suffixIconAnimation"
      ><i v-if="suffixIcon" :class="suffixIcon"></i
    ></span>
  </component>
</template>

<!-- SCRIPT -->
<script setup>
import { ref } from "vue";

const props = defineProps({
  prefixIcon: String,
  suffixIcon: String,
  title: String,
  suffixIconAnimation: String,
  wrapperClasses: String,

  color: { type: String, default: "primary" },
  variant: { type: String, default: "filled" },
  shape: { type: String, default: "pill" },
  size: { type: String, default: "medium" },
  linkSize: String,
  iconSize: String,

  href: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  shadow: String,
});

const buttonComponent = ref(props.href ? "router-link" : "a");
const linkAttr = ref(props.href ? "to" : "href");
</script>
