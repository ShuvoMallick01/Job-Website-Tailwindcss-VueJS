<template>
  <button class="btn-icon-active">
    <i :class="icon"></i>
  </button>
</template>

<script setup>
defineProps(["icon"]);
</script>
