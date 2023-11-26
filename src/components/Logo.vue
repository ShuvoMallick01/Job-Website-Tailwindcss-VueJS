<template>
  <div :class="wrapperClass">
    <slot v-if="$slots.default"></slot>
  </div>
</template>

<!-- SCRIPT -->
<script setup>
defineProps({
  wrapperClass: String,
});
</script>
