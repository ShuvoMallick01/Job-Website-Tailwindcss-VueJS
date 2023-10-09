<template>
  <button type="submit" :class="class">{{ title }}</button>
</template>

<script setup>
defineProps(["title", "class"]);
</script>
