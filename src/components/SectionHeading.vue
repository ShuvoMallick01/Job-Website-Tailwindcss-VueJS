<template>
  <div :class="wrapperClass">
    <h1 class="mb-2">{{ title }}</h1>
    <p :class="descriptionClass">
      {{ description }}
    </p>
  </div>
</template>

<!-- SCRIPT -->
<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  title: String,
  description: String,
  wrapperClass: { type: String, default: "py-12 text-center" },
  descriptionClass: { type: String, default: "base-text text-center" },
});
</script>
