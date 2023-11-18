<template>
  <component :is="wrapComponent" :[linkAttr]="href">
    <img :src="imgUrl" :class="imgClass" v-bind="$attrs" />
  </component>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  href: { type: String, default: "" },
  imgClass: String,
  imgUrl: String,
});

const wrapComponent = ref(props.href ? "router-link" : "span");
const linkAttr = ref(props.href ? "to" : "");
</script>
