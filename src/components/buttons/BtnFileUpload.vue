<template>
  <button class="btn btn-primary relative overflow-hidden">
    {{ title }}
    <input
      class="absolute cursor-pointer left-0 top-0 opacity-0"
      id="resumeupload"
      type="file"
    />
  </button>
</template>

<script setup>
import Button from "../global-components/Button/Button.vue";

defineProps(["title"]);
</script>
