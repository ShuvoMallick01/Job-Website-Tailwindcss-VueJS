<template>
  <span :class="wrapperClasses" v-bind="$attrs">
    <slot name="prefix"></slot>
    {{ title }}
    <slot name="suffix"></slot>
  </span>
</template>

<!-- SCRIPT -->
<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  title: String,
  wrapperClasses: { type: String, default: "extrasmall-text" },
});
</script>
