<template>
  <div
    class="bg-secondary w-6 h-6 md:w-8 md:h-8 text-slate-100 text-base md:text-xl rounded-full flex justify-center flex-shrink-0 relative items-center"
  >
    <p class="absolute">{{ title[0] }}</p>
  </div>
</template>

<script setup>
defineProps(["title"]);
</script>
