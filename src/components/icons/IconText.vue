<template>
  <span class="whitespace-nowrap"
    ><i class="me-1" :class="icon"></i>{{ title }}</span
  >
</template>

<script setup>
defineProps(["icon", "title"]);
</script>
