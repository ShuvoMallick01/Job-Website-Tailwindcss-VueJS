<template>
  <template v-if="isRoute">
    <router-link :to="url">
      <img :src="imgUrl" :class="imgClass" v-bind="$attrs" />
    </router-link>
  </template>

  <template v-else>
    <img :src="imgUrl" :class="imgClass" v-bind="$attrs" />
  </template>
</template>

<script setup>
defineProps(["isRoute", "url", "className", "imgUrl", "imgClass"]);
</script>
