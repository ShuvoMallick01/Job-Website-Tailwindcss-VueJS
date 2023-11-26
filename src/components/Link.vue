<template>
  <component
    :is="linkComponent"
    :[linkAttr]="href"
    v-bind="$attrs"
    class="whitespace-nowrap"
    :class="{
      primary: color === 'primary',
      secondary: color === 'secondary',
      'primary-light': color === 'primary-light',
      'secondary-light': color === 'secondary-light',
      disabled: color === 'disabled',

      'link-sm': size === 'small',
      'link-md': size === 'medium',
      'link-lg': size === 'large',

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
  size: { type: String, default: "medium" },
  href: { type: String, default: "" },
});

const linkComponent = ref(props.href ? "router-link" : "a");
const linkAttr = ref(props.href ? "to" : "href");
</script>

<!-- STYLE -->
<style scoped>
.link-sm {
  @apply text-sm font-light p-1;
}
.link-md {
  @apply text-base p-1;
}
.link-lg {
  @apply text-lg font-semibold p-1;
}
</style>
