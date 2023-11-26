<template>
  <component :is="wrapComponent" :[linkAttr]="href">
    <img v-bind="$attrs" />
  </component>
</template>

<!-- SCRIPT -->
<script setup>
import { ref } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  href: { type: String, default: "" },
});

const wrapComponent = ref(props.href ? "router-link" : "span");
const linkAttr = ref(props.href ? "to" : "");
</script>
