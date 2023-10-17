<template>
  <div class="flex justify-between items-center" :class="divClassName">
    <h2 class="sectionSubHeading uppercase">{{ headingTitle }}</h2>

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
  "divClassName",
  "btnClass",
  "btnTitle",
  "beforeBtnIcon",
]);
</script>
