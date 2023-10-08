<template>
  <p class="btn-text"><i :class="icon" class="me-1"></i>{{ title }}</p>
</template>

<script setup>
defineProps(["icon", "title"]);
</script>
