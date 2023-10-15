<template>
  <span :class="className" v-bind="$attrs">
    <template v-if="beforeIcon"><i class="beforeIcon"></i></template>
    {{ title }}
    <template v-if="afterIcon"><i class="afterIcon"></i></template>
  </span>
</template>

<script setup>
defineProps(["title", "className", "beforeIcon", "afterIcon"]);
</script>
