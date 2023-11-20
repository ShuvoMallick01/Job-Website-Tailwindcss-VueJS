<template>
  <div
    class="flex justify-between items-center mb-8 pb-2 border-b"
    :class="parentClasses"
  >
    <h3>{{ headingName }}</h3>

    <slot v-if="$slots.default"></slot>
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  headingName: String,
  parentClasses: String,
});
</script>
