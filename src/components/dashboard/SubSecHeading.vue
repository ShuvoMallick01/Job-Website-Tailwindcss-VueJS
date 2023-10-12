<template>
  <div class="flex justify-between items-center mb-5 pb-4 border-b">
    <h2 class="sectionSubHeading uppercase">{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps(["title"]);
</script>
