<template>
  <button class="btn-icon">
    <i :class="icon"></i>
  </button>
</template>

<script setup>
defineProps(["icon"]);
</script>
