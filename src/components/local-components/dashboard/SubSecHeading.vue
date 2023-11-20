<template>
  <div class="flex justify-between items-center" :class="parentClasses">
    <h3 class="">{{ headingTitle }}</h3>

    <template v-if="btnTitle">
      <button :class="btnClass" v-bind="$attrs">
        <i :class="beforeBtnIcon"></i>{{ btnTitle }}
      </button>
    </template>
  </div>
</template>

<script setup>
defineProps([
  "headingTitle",
  "parentClasses",
  "btnClass",
  "btnTitle",
  "beforeBtnIcon",
]);
</script>
