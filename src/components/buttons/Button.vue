<template>
  <template v-if="isButton">
    <button :class="className" v-bind="$attrs" v-on="$attrs">
      <template v-if="beforeIcon"><i :class="beforeIcon"></i></template>
      {{ title }}
      <template v-if="afterIcon"
        ><i v-if="afterIcon" :class="afterIcon"></i
      ></template>
    </button>
  </template>

  <template v-else>
    <router-link :to="url" :class="className" v-bind="$attrs">
      <template v-if="beforeIcon"
        ><i v-if="beforeIcon" :class="beforeIcon"></i
      ></template>
      {{ title }}
      <span :class="iconAnimation"><i :class="afterIcon"></i></span>
    </router-link>
  </template>
</template>

<script setup>
defineProps([
  "title",
  "className",
  "beforeIcon",
  "afterIcon",
  "isButton",
  "iconAnimation",
  "url",
]);
</script>
