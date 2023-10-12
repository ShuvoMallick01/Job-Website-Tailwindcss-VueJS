<template>
  <button class="btn-icon-active bg-secondary">
    <i :class="icon"></i>
  </button>
</template>

<script setup>
defineProps(["icon"]);
</script>
